import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Survey } from './survey.entity';
import { CreateSurveyDto } from './create-survey.dto';
import { PreferredLanguage } from './enums/preferred-language.enum';
import { HowFound } from './enums/how-found.enum';
import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
    constructor(private surveyService: SurveyService) {}

    @Post()
    @UsePipes(ValidationPipe)
    createSurvey(@Body() createSurveyDto: CreateSurveyDto): Promise<Survey> {
        return this.surveyService.createSurvey(createSurveyDto);
    }
}
