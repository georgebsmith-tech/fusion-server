import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schema/user.schema";
import { LoginDto, RegisterDto } from "./auth.dto";
import * as argon from "argon2";

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}
  async login({ email, password }: LoginDto) {
    const userExists = await this.UserModel.findOne({ email });
    if (!userExists) {
      throw new UnauthorizedException("Invalid login credientials");
    }
    const { password: hash } = userExists;
    const isPassword = await argon.verify(hash, password);

    if (!isPassword) {
      throw new UnauthorizedException("Invalid login credientials");
    }

    return userExists;
  }

  async register(payload: RegisterDto) {
    const { password, confirmPassword, email } = payload;
    const userExists = await this.UserModel.findOne({ email });

    if (userExists) {
      throw new ConflictException(
        "There is already a user with this email address"
      );
    }
    if (password !== confirmPassword) {
      throw new BadRequestException("Password and confirmPassword must match");
    }

    const hash = await argon.hash(password);
    const user = await this.UserModel.create({ ...payload, password: hash });

    return user;
  }
}
