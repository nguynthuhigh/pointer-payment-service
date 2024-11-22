import { Types } from "mongoose";

export function cleanData(data: any, dto: any) {
  const dtoKeys = Object.keys(new dto());
  const cleanedData: any = {};

  dtoKeys.forEach((key: any) => {
    if (key in data) {
      cleanedData[key] = data[key];
    }
  });

  return cleanedData;
}

export function convertToObjectId(id: string) {
  return new Types.ObjectId(id);
}
