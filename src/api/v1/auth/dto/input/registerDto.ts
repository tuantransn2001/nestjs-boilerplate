import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ required: true, default: 'user@gmail.com' })
  @IsString()
  email?: string;
  @ApiProperty({ required: true, default: '0984250491' })
  @IsString()
  phone: string;
  @ApiProperty({ required: true, default: '@password!123PW' })
  @IsString()
  password: string;
  @ApiProperty({ required: true })
  @IsString()
  name: string;
}
