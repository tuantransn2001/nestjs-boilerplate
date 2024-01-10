import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import * as Mail from 'nodemailer/lib/mailer';

dotenv.config();

@Injectable()
export class MailService {
  private nodemailerTransport: Mail;
  constructor() {
    this.nodemailerTransport = createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  public sendMail(options: Mail.Options) {
    return this.nodemailerTransport.sendMail(options);
  }
}
