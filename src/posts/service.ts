import { UploadApiResponse } from "cloudinary";
import { saveCloudStorage } from "../libs/cloudinary/service";
import { Post } from "../models/post";
import { PostFiles } from "../models/post_files";

export async function createPost(
  title: string,
  content: string,
  userId: number,
  file
) {
  const fileBuffer: Buffer = file[0].buffer;
  const resultSavePost = await Post.create({ userId, title, content });
  if (fileBuffer) {
    const resultSaveMedia: any = await saveCloudStorage(fileBuffer, userId);
    await PostFiles.create({
      postId: resultSavePost.id,
      fileName: resultSaveMedia.public_id,
      file: resultSaveMedia.url,
    });
  }

  return { message: `Image  saved successfully`, statusCode: 201 };
}
