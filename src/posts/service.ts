import { saveCloudStorage } from "../libs/cloudinary/service";
import { Post } from "../models/post";
import { PostImages } from "../models/post_images";
import { ResultSaveMedia, ReqFileDto, MapperUpPost } from "../types/blog";
import {
  checkPost,
  deleteMediaFromPost,
  dropMeadiaInPost,
  mapperUpdatePost,
} from "./helper";

export async function createPostText(
  title: string,
  content: string,
  userId: number
) {
  await Post.create({ userId, title, content });
  return { message: `Post ${title} saved successfully`, statusCode: 201 };
}

export async function changeText(
  userId: number,
  title: string,
  content: string,
  postId: number
) {
  await checkPost(userId, postId);
  const objSave: MapperUpPost = mapperUpdatePost(content, title);
  await Post.update(objSave, { where: { id: postId } });
  return { message: `Post updated !`, statusCode: 201 };
}

export async function addImage(
  userId: number,
  files: ReqFileDto,
  postId: number
) {
  await checkPost(userId, postId);
  const fileBuffer = files[0];
  const resultSaveMedia: ResultSaveMedia = await saveCloudStorage(
    fileBuffer.buffer,
    userId
  );
  await PostImages.create({
    postId,
    fileName: resultSaveMedia.public_id,
    file: resultSaveMedia.url,
  });
  return { message: `Image saved.`, statusCode: 201 };
}

export async function destroyImagePost(
  userId: number,
  fileId: number,
  postId: number
) {
  const oneUser = await checkPost(userId, postId);
  await dropMeadiaInPost(oneUser, fileId);
  return { message: `Image delete.`, statusCode: 201 };
}

export async function destroyPost(userId: number, postId: number) {
  const oneUser = await checkPost(userId, postId);
  deleteMediaFromPost(oneUser, postId);
  const post = await Post.findOne({ where: { id: postId } });
  await post.destroy();
  return { message: `Post delete.`, statusCode: 201 };
}
