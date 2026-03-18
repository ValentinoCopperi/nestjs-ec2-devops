import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  private readonly startTime = Date.now();

  @Get()
  healthCheck() {
    const uptimeMs = Date.now() - this.startTime;
    const uptimeSeconds = Math.floor(uptimeMs / 1000);
    const hours = Math.floor(uptimeSeconds / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = uptimeSeconds % 60;

    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: `${hours}h ${minutes}m ${seconds}s`,
      uptimeSeconds,
    };
  }
}
