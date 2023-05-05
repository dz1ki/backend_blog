import { Post } from "../models/post";
import { PostImages } from "../models/post_images";
import { User } from "../models/user";
import {
  AddPostImageDto,
  AddPostTextDTO,
  GetAllPostDTO,
  DestroyDto,
  DestroyImageDto,
  UpdatePostTextDto,
  GetPostUserDTO,
} from "../types/post";
import {
  addImage,
  changeText,
  createPostText,
  destroyImagePost,
  destroyPost,
} from "./service";
import { parseStringToNumber } from "./validator";

export async function createPost(req: AddPostTextDTO, res) {
  try {
    const { title, content } = req.body;
    const { id } = req.user;
    const result = await createPostText(title, content, id);
    res.status(result.statusCode || 200).json(result.message);
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}

export async function getAllPosts(req: GetAllPostDTO, res) {
  try {
    const { page, limit } = req.query;
    const offset = (page - 1) * limit;
    const result = await Post.findAll({
      limit,
      offset,
      order: [["id", "ASC"]],
      attributes: ["id", "title", "content", "createdAt"],
      include: [
        { model: User, attributes: ["firstName", "lastName"] },
        { model: PostImages, attributes: ["id", "fileName", "file"] },
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}

export async function getPostUser(req: GetPostUserDTO, res) {
  try {
    const { id } = req.user;
    const { page, limit } = req.query;
    const offset = (page - 1) * limit;
    const result = await Post.findAll({
      where: { userId: id },
      limit,
      offset,
      order: [["id", "ASC"]],
      attributes: ["id", "title", "content", "createdAt"],
      include: [{ model: PostImages, attributes: ["id", "fileName", "file"] }],
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}

export async function updateText(req: UpdatePostTextDto, res) {
  try {
    const { id } = req.user;
    const { title, content, postId } = req.body;
    const result = await changeText(id, title, content, postId);
    res.status(result.statusCode || 200).json(result.message);
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}

export async function addPostImage(req: AddPostImageDto, res) {
  try {
    const { id } = req.user;
    const { postId } = req.body;
    const { files } = req;
    const resultParse = parseStringToNumber(postId);
    const result = await addImage(id, files, resultParse.id);
    res.status(result.statusCode || 200).json(result.message);
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}

export async function destroyImage(req: DestroyImageDto, res) {
  try {
    const { id } = req.user;
    const { postId, fileId } = req.body;
    const resultpostId = parseStringToNumber(postId);
    const resultFileID = parseStringToNumber(fileId);
    const result = await destroyImagePost(id, resultFileID.id, resultpostId.id);
    res.status(result.statusCode || 200).json(result.message);
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}

export async function destroy(req: DestroyDto, res) {
  try {
    const { id } = req.user;
    const { postId } = req.body;
    const result = await destroyPost(id, postId);
    res.status(result.statusCode || 200).json(result.message);
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}
