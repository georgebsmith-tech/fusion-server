import { Injectable } from "@nestjs/common";
import { Welcomdto } from "./app.dto";

@Injectable()
export class AppService {
  welcome(): Welcomdto {
    return { message: "Welcome" };
  }
}
