import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { MongooseModule } from "@nestjs/mongoose";
const MONGO_URI = process.env.MONGO_URI || "";
console.log(MONGO_URI);
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    MongooseModule.forRoot(
      "mongodb+srv://fusion-server:fusion-server@cluster0.fd4giln.mongodb.net/?retryWrites=true&w=majority"
    ),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
