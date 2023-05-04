import cloudinary from "../libs/cloudinary";
import { Post } from "../models/post";
import { PostImages } from "../models/post_images";
import { User } from "../models/user";

export async function checkPost(userId: number, postId: number) {
  const oneUser = await User.findOne({
    where: { id: userId },
    include: [
      {
        model: Post,
        include: [
          {
            model: PostImages,
          },
        ],
      },
    ],
  });
  const result = oneUser.posts.some((post) => post.id === postId);
  if (!result) {
    throw {
      message: "This user has no such post",
      statusCode: 400,
    };
  }
  return oneUser;
}

export function checkMeadiaInPost(oneUser: User, fileId: number) {
  const result = oneUser.posts.some((post) =>
    post.postImages.some((file) => file.id === fileId)
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
    post.postImages.find((file) => file.id === fileId)
  );
  cloudinary.v2.uploader.destroy(objFile[0].fileName);
  await PostImages.destroy({
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
      for (const file of post.postImages) {
        await cloudinary.v2.uploader.destroy(file.fileName);
      }
    }
  }
}
