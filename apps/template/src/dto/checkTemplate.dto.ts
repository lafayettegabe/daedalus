/* eslint-disable prettier/prettier */

import { IsString, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class PhoneNumberDTO {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim()) // Trim the country code if there are leading/trailing spaces
  country: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim()) // Trim the phone number if there are leading/trailing spaces
  phoneNumber: string;
}
