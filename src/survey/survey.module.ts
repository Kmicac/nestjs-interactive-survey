import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { SurveyResponse } from './survey.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([SurveyResponse]),
  ],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}