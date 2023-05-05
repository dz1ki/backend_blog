import { Post } from "../models/post";
import { PostImages } from "../models/post_images";
import { User } from "../models/user";
import { GetPostUserDTO } from "../types/post";
import {
  DropUserDto,
  UpdatePasswordDTO,
  UpdateUserDTO,
} from "../types/profile";
import { updatePasswordUser, updateUserData } from "./service";

export async function updateUser(req: UpdateUserDTO, res) {
  try {
    const { id } = req.user;
    const { email, firstName, lastName } = req.body;
    const result = await updateUserData(id, email, firstName, lastName);
    res.status(result.statusCode || 200).json(result.message);
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}

export async function updatePassword(req: UpdatePasswordDTO, res) {
  try {
    const { id } = req.user;
    const { oldPassword, newPassword, repeatNewPassword } = req.body;
    const result = await updatePasswordUser(
      oldPassword,
      newPassword,
      repeatNewPassword,
      id
    );
    res.status(result.statusCode || 200).json(result.message);
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

export async function dropUser(req: DropUserDto, res) {
  try {
    const { id } = req.user;
    const user = await User.findOne({ where: { id } });
    await user.destroy();
    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    res.status(error.statusCode || 500).json(error.message || "Server error");
  }
}
