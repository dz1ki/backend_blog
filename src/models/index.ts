import * as config from "config";
import { Sequelize } from "sequelize-typescript";
import { User } from "./user";
import { Post } from "./post";
import { PostImages } from "./post_images";

const connection = new Sequelize({
  dialect: config.get("DBconfig.dialect"),
  host: config.get("DBconfig.host"),
  username: config.get("DBconfig.username"),
  password: config.get("DBconfig.password"),
  database: config.get("DBconfig.database"),
  models: [User, Post, PostImages],
});

export default connection;
