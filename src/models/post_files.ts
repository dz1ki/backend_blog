import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { Post } from "./post";

@Table({
  tableName: "post_files",
  timestamps: false,
})
export class PostFiles extends Model {
  @Column({
    type: DataType.INTEGER(),
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Post)
  @Column({
    type: DataType.INTEGER(),
    allowNull: true,
    field: "post_id",
  })
  postId: number;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
    field: "file_name",
  })
  fileName: string;

  @Column({
    type: DataType.STRING(),
  })
  file: string;

  @BelongsTo(() => Post)
  post: Post;
}
