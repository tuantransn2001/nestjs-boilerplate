import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';

import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto as LoginDtoInput } from './dto/input/loginDto';

import { RegisterDto } from './dto/input/registerDto';
import { UserStatus, UserType } from '../user/enum';

@ApiTags('Authenticate')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @ApiOperation({ summary: 'Login', description: 'User login' })
  @ApiBody({
    type: LoginDtoInput,
    examples: {
      login: {
        value: {
          phone: '0123456789',
          password: 'password',
        },
      },
    },
  })
  public async login(
    @Body() loginDto: LoginDtoInput,
    @Res({ passthrough: true }) response: Response,
  ) {
    return await this.authService.login(loginDto, response);
  }

  @Post('/register')
  @ApiOperation({ summary: 'Register', description: 'User register' })
  @ApiBody({
    type: RegisterDto,
    examples: {
      register: {
        value: {
          email: 'admin@gmail.com',
          phone: '0984250491',
          password: 'password',
          first_name: 'admin',
          middle_name: 'admin',
          last_name: 'admin',
          type: UserType.ADMIN,
          status: UserStatus.ONLINE,
        },
      },
    },
  })
  public async register(
    @Body() registerDto: RegisterDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    return await this.authService.register(registerDto, response);
  }

  @Post('/refresh')
  public async refresh(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    return await this.authService.refreshToken(request, response);
  }

  @Get('/me')
  public async getMe(@Req() request: Request) {
    return await this.authService.getMe(request);
  }
}
