import { type } from "os";

type MiddelewareAuthDTO = {
  email: string;
  id: number;
};

export type ReqFileDto = [
  {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    buffer: Buffer;
  }
];

export type ResultSaveMedia = {
  asset_id?: string;
  public_id?: string;
  version?: number;
  version_id?: string;
  signature?: string;
  width?: number;
  height?: number;
  format?: string;
  resource_type?: string;
  created_at?: Date;
  tags?: [];
  bytes?: number;
  type?: string;
  etag?: string;
  placeholder?: boolean;
  url?: string;
  secure_url?: string;
  folder?: string;
  access_mode?: string;
  original_filename?: string;
  api_key?: string;
};

export type AddPostTextDTO = {
  user: MiddelewareAuthDTO;
  body: {
    title: string;
    content: string;
  };
};

export type UpdatePostTextDto = {
  user: MiddelewareAuthDTO;
  body: {
    title: string;
    content: string;
    postId: number;
  };
};

export type MapperUpPost = {
  content?: string;
  title?: string;
};

export type DestroyDto = {
  user: MiddelewareAuthDTO;
  body: {
    postId: number;
  };
};

export type AddPostImageDto = {
  user: MiddelewareAuthDTO;
  body: {
    postId: string;
  };
  files: ReqFileDto;
};

export type DestroyImageDto = {
  user: MiddelewareAuthDTO;
  body: {
    postId: string;
    fileId: string;
  };
};
