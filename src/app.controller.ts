import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get('config')
  getConfig(): any {
    const config = this.configService.get('db');
    return config;
  }
}
