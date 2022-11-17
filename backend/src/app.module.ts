import { Module } from '@nestjs/common';

import { UsersModule } from './users.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from './database.module';
import { GroupModule } from './group.module';
import { GroupController } from './group.controller';
import { UsersController } from './users.controller';
import { GroupService } from './group.service';
import { UsersService } from './users.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      validationSchema: Joi.object({
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_USER: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
    }),
    DatabaseModule,
    UsersModule,
    GroupModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
