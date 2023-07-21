import { NestFactory } from '@nestjs/core';
import { TemplateModule } from './template.module';

async function bootstrap() {
  const app = await NestFactory.create(TemplateModule);
  await app.listen(3000);
}
bootstrap();