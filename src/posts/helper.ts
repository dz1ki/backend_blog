import cloudinary from "../libs/cloudinary";
import { PostFiles } from "../models/post_files";
import { User } from "../models/user";

export function checkPost(oneUser: User, postId: number) {
  const result = oneUser.posts.some((post) => post.id === postId);
  if (!result) {
    throw {
      message: "This user has no such post",
      statusCode: 400,
    };
  }
}

export function checkMeadiaInPost(oneUser: User, fileId: number) {
  const result = oneUser.posts.some((post) =>
    post.postFiles.some((file) => file.id === fileId)
  );
  if (!result) {
    throw {
      message: "There is no such file in this post",
      statusCode: 400,
    };
  }
}

export async function dropMeadiaInPost(oneUser: User, fileId: number) {
  checkMeadiaInPost(oneUser, fileId);
  const objFile = oneUser.posts.map((post) =>
    post.postFiles.find((file) => file.id === fileId)
  );
  cloudinary.v2.uploader.destroy(objFile[0].fileName);
  await PostFiles.destroy({
    where: {
      id: fileId,
    },
  });
}

export function mapperUpdatePost(content: string, title: string) {
  const data = {
    content,
    title,
  };
  let result = {};
  for (let key in data) {
    if (data[key]) {
      result[key] = data[key];
    }
  }
  return result;
}

export async function deleteMediaFromPost(oneUser: User, postId: number) {
  for (const post of oneUser.posts) {
    if (post.id === postId) {
      for (const file of post.postFiles) {
        await cloudinary.v2.uploader.destroy(file.fileName);
      }
    }
  }
}
