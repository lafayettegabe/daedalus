import { Test, TestingModule } from '@nestjs/testing';
import { TemplateController } from './template.controller';
import { TemplateService } from './template.service';

describe('TemplateController', () => {
  let templateController: TemplateController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TemplateController],
      providers: [TemplateService],
    }).compile();

    templateController = app.get<TemplateController>(TemplateController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(templateController.getHello()).toBe('Hello World!');
    });
  });
});
