import { Injectable, Logger } from '@nestjs/common';
import { PhoneNumberDTO } from './dto/checkTemplate.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TemplateService {
  constructor(private readonly httpService: HttpService) {}

  private readonly logger = new Logger(TemplateService.name);

  async checkTemplate(
    phoneNumber: PhoneNumberDTO,
  ): Promise<{ data: any; status: number }> {
    const country = '55';
    const number = { "phoneNumber": `${country}${phoneNumber.phoneNumber}` };
    const url = process.env.API_URL;

    this.logger.log(
      `Sending request to API with number ${country}${phoneNumber.phoneNumber}`,
    );

    try {
      const response = await firstValueFrom(
        this.httpService.post(url, number, {
          headers: {
            'Content-Type': 'text/plain',
            'User-Agent': 'PostmanRuntime/7.32.3',
          },
        }),
      );

      this.logger.log(`Response from API: ${response.data['existsWhatsapp']}`);

      return {
        data: response.data['existsWhatsapp'],
        status: response.status,
      };
    } catch (error) {
      this.logger.error(`Error from API: ${error}`);

      return {
        data: error,
        status: 500,
      };
    }
  }

  // hello world
  helloWorld() {
    return 'Hello World!';
  }
}
