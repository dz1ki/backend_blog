import { saveCloudStorage } from "../libs/cloudinary/service";
import { Post } from "../models/post";
import { PostFiles } from "../models/post_files";
import { User } from "../models/user";
import { ResultSaveMedia, ReqFileDto, MapperUpPost } from "../types/blog";
import {
  checkPost,
  deleteMediaFromPost,
  dropMeadiaInPost,
  mapperUpdatePost,
} from "./helper";

export async function createPost(
  title: string,
  content: string,
  userId: number,
  files: ReqFileDto
) {
  const fileBuffer = files[0];
  const resultSavePost = await Post.create({ userId, title, content });
  if (fileBuffer) {
    const resultSaveMedia: ResultSaveMedia = await saveCloudStorage(
      fileBuffer.buffer,
      userId
    );
    await PostFiles.create({
      postId: resultSavePost.id,
      fileName: resultSaveMedia.public_id,
      file: resultSaveMedia.url,
    });
  }
  return { message: `Post ${title} saved successfully`, statusCode: 201 };
}

export async function change(
  userId: number,
  files: ReqFileDto,
  title: string,
  content: string,
  postId: number,
  fileId: number
) {
  const fileBuffer = files[0];
  const oneUser = await User.findOne({
    where: { id: userId },
    include: [
      {
        model: Post,
        include: [
          {
            model: PostFiles,
          },
        ],
      },
    ],
  });
  checkPost(oneUser, postId);
  if (fileId) {
    await dropMeadiaInPost(oneUser, fileId);
  }
  if (fileBuffer) {
    const resultSaveMedia: ResultSaveMedia = await saveCloudStorage(
      fileBuffer.buffer,
      userId
    );
    await PostFiles.create({
      postId,
      fileName: resultSaveMedia.public_id,
      file: resultSaveMedia.url,
    });
  }
  const objSave: MapperUpPost = mapperUpdatePost(content, title);
  await Post.update(objSave, { where: { id: postId } });
  return { message: `Post updated !`, statusCode: 201 };
}

export async function destroyPost(id: number, postId: number) {
  const oneUser = await User.findOne({
    where: { id },
    include: [
      {
        model: Post,
        include: [
          {
            model: PostFiles,
          },
        ],
      },
    ],
  });
  checkPost(oneUser, postId);
  deleteMediaFromPost(oneUser, postId);
  const post = await Post.findOne({ where: { id: postId } });
  await post.destroy();
  return { message: `Post delete!`, statusCode: 201 };
}
