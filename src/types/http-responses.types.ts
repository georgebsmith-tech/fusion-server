import { HttpStatus } from "@nestjs/common";

export interface ISuccessResponse {
  message?: string;
  statusCode?: HttpStatus;
  statusText?: string;
  data?: any;
  meta?: any;
}
