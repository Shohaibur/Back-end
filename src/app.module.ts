import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManagerController } from './manager/manager.controller';
import { ManagerModule } from './manager/manager.module';

@Module({
  imports: [ManagerModule],
  controllers: [AppController, ManagerController],
  providers: [AppService],
})
export class AppModule {}
