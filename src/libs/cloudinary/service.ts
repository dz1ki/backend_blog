import * as streamifier from "streamifier";
import cloudinary from "./index";

export async function saveCloudStorage(buffer: Buffer, userId: number) {
  return new Promise(async (resolve, reject) => {
    let cldUploadStream = cloudinary.v2.uploader.upload_stream(
      {
        folder: `Media${userId}`,
      },
      (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      }
    );
    await streamifier.createReadStream(buffer).pipe(cldUploadStream);
  });
}
