import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DataType,
  BelongsTo,
  HasMany,
  ForeignKey,
} from "sequelize-typescript";
import { User } from "./user";
import { PostFiles } from "./post_files";

@Table({
  tableName: "posts",
})
export class Post extends Model {
  @Column({
    type: DataType.INTEGER(),
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER(),
    allowNull: true,
    field: "user_id",
  })
  userId: number;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING(),
  })
  content: string;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => PostFiles)
  postFiles: PostFiles[];

  @CreatedAt
  @Column({ field: "created_at" })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: "updated_at" })
  updatedAt: Date;
}
