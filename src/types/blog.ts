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

export type AddMediaDTO = {
  user: MiddelewareAuthDTO;
  body: {
    title: string;
    content: string;
  };
  files?: ReqFileDto;
};

export type UpdatePostDto = {
  user: MiddelewareAuthDTO;
  files?: ReqFileDto;
  body: {
    title: string;
    content: string;
    fileId: string;
    postId: string;
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
