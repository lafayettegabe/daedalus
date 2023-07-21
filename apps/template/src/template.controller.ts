import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PhoneNumberDTO } from './dto/checkTemplate.dto';
import { PhoneNumberGuard } from './guards/checkTemplate.guard';
import { TemplateService } from './template.service';

@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @UseGuards(PhoneNumberGuard)
  @Post()
  async checkTemplate(@Body() data: PhoneNumberDTO) {
    return this.templateService.checkTemplate(data);
  }

  @Post('hello')
  helloWorld() {
    return this.templateService.helloWorld();
  }
}
