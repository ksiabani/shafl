import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiModule } from 'api/api.module';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [MongooseModule.forRoot(new ConfigService('.env').get('MONGODB_URI')), ApiModule, ConfigModule],
})
export class AppModule {}
