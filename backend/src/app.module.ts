import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesModule } from './games/games.module';
import { LectionsModule } from './lections/lections.module';
import { LevelsModule } from './levels/levels.module';
import { SublectionsModule } from './sublections/sublections.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'password',
      database: 'nestjs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GamesModule,
    LectionsModule,
    LevelsModule,
    SublectionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
