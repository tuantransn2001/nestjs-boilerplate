import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { UserStatus, UserType } from 'src/api/v1/user/enum';

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
  first_name: string;

  @ApiProperty({
    enum: UserType,
    isArray: true,
    example: Object.values(UserType),
  })
  @IsEnum(UserType, { each: true })
  type: UserType;

  @ApiProperty({
    enum: UserStatus,
    isArray: true,
    example: Object.values(UserStatus),
  })
  @IsEnum(UserStatus, { each: true })
  status: UserStatus;

  @ApiProperty()
  @IsString()
  last_name: string;
  @ApiProperty()
  @IsString()
  middle_name: string;
}
