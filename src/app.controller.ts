import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { Welcomdto } from "./app.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  welcome(): Welcomdto {
    return this.appService.welcome();
  }
}
