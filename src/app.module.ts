import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'; // 환경변수 관리 및 환경변수 유효성 검사
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModuleOptions } from './config/database.config';
import { configModuleValidationSchema } from './config/env-validation.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: configModuleValidationSchema,
    }),
    TypeOrmModule.forRootAsync(typeOrmModuleOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
