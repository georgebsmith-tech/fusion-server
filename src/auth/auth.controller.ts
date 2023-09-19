import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { RESOURCE } from "src/constants";
import { AuthService } from "./auth.service";
import { LoginDto, RegisterDto } from "./auth.dto";
import { successResponse } from "src/utils/http-response.utils";

@Controller(RESOURCE.AUTH)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @Post("register")
  async register(@Body() body: RegisterDto) {
    const user = await this.authService.register(body);
    return successResponse({
      message: "Account created successfully",
      statusCode: HttpStatus.CREATED,
      data: { user },
    });
  }
}
