/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PhoneNumberGuard implements CanActivate {
  private readonly logger = new Logger(PhoneNumberGuard.name);

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const phoneNumber = request.body.phoneNumber;
    const country = request.body.country;

    this.logger.log(`Phone number: ${phoneNumber}`);

    if ( (phoneNumber === undefined || phoneNumber === null || phoneNumber === '') || (country === undefined || country === null || country === '') ) {
      this.logger.log(`Phone number ${phoneNumber} is invalid`);
      return false;
    } else {
      
      const contry_digits = {
        'BR': 11, // Brazil
        'AR': 11, // Argentina
        'CL': 11, // Chile
        'PE': 11, // Peru
        'CO': 11 || 10, // Colombia
        'EC': 11, // Ecuador
        'UY': 11, // Uruguay
        'PY': 11, // Paraguay
        'VE': 11, // Venezuela
        'MX': 10, // Mexico
        'US': 10, // United States
        'CA': 10, // Canada
        'GB': 10, // United Kingdom
        'ES': 10, // Spain
        'DE': 10, // Germany
        'FR': 10, // France
        'IT': 10, // Italy
        'PT': 10, // Portugal
        'NL': 10, // Netherlands
        'BE': 10, // Belgium
        'AT': 10, // Austria
        'DK': 10, // Denmark
        'SE': 10, // Sweden
        'NO': 10, // Norway
        'FI': 10, // Finland
        'PL': 10, // Poland
        'RU': 10, // Russia
        'UA': 10, // Ukraine
        'TR': 10, // Turkey
        'IN': 10, // India
        'ID': 10, // Indonesia
        'MY': 10, // Malaysia
        'TH': 10, // Thailand
        'PH': 10, // Philippines
        'SG': 10, // Singapore
        'JP': 10, // Japan
        'KR': 10, // South Korea
        'AU': 10, // Australia
        'NZ': 10, // New Zealand
        'ZA': 10, // South Africa
        'NG': 10, // Nigeria
        'KE': 10, // Kenya
        'EG': 10, // Egypt
        'MA': 10, // Morocco
        'DZ': 10, // Algeria
        'TN': 10, // Tunisia
        'GH': 10, // Ghana
        'SD': 10, // Sudan
        'CM': 10, // Cameroon
        'SN': 10, // Senegal
        'AO': 10, // Angola
      };

      // validate phone number, should have country code and 10 digits
      try {
        phoneNumber.replace(/\D/g, '');     // remove all non-digit characters
      } catch (error) {
        this.logger.error(`Error: ${error}`);
        this.logger.log(`Phone number ${phoneNumber} is invalid`);
        return false;
      }

      if (phoneNumber.length === contry_digits[country]) {
        this.logger.log(`Phone number ${phoneNumber} is valid`);
        return true;
      } else {
        this.logger.log(`Phone number ${phoneNumber} is invalid`);
        return false;
      }
    }
    return false;
  }
}
