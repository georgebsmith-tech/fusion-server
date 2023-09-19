import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger, ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 7001;

  try {
    app.setGlobalPrefix("api/v1");
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(PORT, () => Logger.log(`App is running on port ${PORT}`));
  } catch (error) {
    Logger.error(error);
  }
}
bootstrap();
