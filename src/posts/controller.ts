import { AddMediaDTO, DestroyDto, UpdatePostDto } from "../types/blog";
import { change, createPost, destroyPost } from "./service";
import { parseStringToNumber } from "./validator";

export async function addPost(req: AddMediaDTO, res) {
  try {
    const { title, content } = req.body;
    const { id } = req.user;
    const { files } = req;
    const result = await createPost(title, content, id, files);
    res.status(result.statusCode || 200).json(result.message);
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}

export async function update(req: UpdatePostDto, res) {
  try {
    const { id } = req.user;
    const { files } = req;
    const { title, content, fileId, postId } = req.body;
    const resultParse = parseStringToNumber(postId, fileId);
    const { postIdNumb, fileIdNumb } = resultParse;
    const result = await change(
      id,
      files,
      title,
      content,
      postIdNumb,
      fileIdNumb
    );
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
