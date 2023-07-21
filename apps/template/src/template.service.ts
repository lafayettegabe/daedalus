import { Injectable } from '@nestjs/common';

@Injectable()
export class TemplateService {
  getHello(): string {
    return 'Hello World!';
  }

  
}
