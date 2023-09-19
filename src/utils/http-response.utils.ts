import { HttpCode, HttpStatus } from "@nestjs/common";
import { ISuccessResponse } from "src/types";

export const successResponse = ({
  message = "Success",
  statusText = "Success",
  statusCode = HttpStatus.OK,
  data,
  meta,
}: ISuccessResponse) => {
  return {
    message,
    statusText,
    statusCode,
    ...(data && { data: { ...data } }),
    ...(meta && { meta }),
  };
};
