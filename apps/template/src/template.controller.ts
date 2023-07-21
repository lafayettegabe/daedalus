import { Controller, Get } from '@nestjs/common';
import { TemplateService } from './template.service';

@Controller()
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Get()
  getHello(): string {
    return this.templateService.getHello();
  }
}