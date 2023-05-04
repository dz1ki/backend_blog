export function parseStringToNumber(id: string) {
  const result = { id: Number(id) };
  if (isNaN(result.id)) {
    throw {
      message: "Error validate id must be a number",
      statusCode: 400,
    };
  }
  if (result.id === 0) {
    result.id = null;
  }
  return result;
}
