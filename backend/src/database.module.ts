import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      // pulls data from my .env file
      // you need to configure your own
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [join(__dirname, '**', '*.entity.ts')],
        // needed to turn this off for my database, sometimes necessary
        // ssl: {
        //   rejectUnauthorized: false,
        // },
        //ensures that the database and entity are synchronized
        //if you make entity changes, you should turn it back on to reconfigure
        //should be set to false during production!!!
        synchronize: false,
        logging: true,
        autoLoadEntities: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
