export function parseStringToNumber(postId: string, fileId: string) {
  const result = { postIdNumb: Number(postId), fileIdNumb: Number(fileId) };
  if (isNaN(result.postIdNumb) || isNaN(result.fileIdNumb)) {
    throw {
      message: "Error validate postId and fileId must be a number",
      statusCode: 400,
    };
  }
  if (result.fileIdNumb === 0) {
    result.fileIdNumb = null;
  }
  return result;
}
