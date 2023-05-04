import { createPost } from "./service";

export async function addPost(req, res) {
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
