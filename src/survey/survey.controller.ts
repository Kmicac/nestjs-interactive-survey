import { Body, Controller, Post, Get, Param, UsePipes, ValidationPipe, Patch } from '@nestjs/common';
import { CreateSurveyDto } from './create-survey.dto';
import { SurveyService } from './survey.service';
import { SurveyResponse } from './survey.entity';
import { PreferredLanguage } from './enums/preferred-language.enum';

@Controller('survey')
export class SurveyController {
    constructor(private surveyService: SurveyService) {}

    @Get('/:id')
    async getSurveyById(@Param('id') id: number): Promise<SurveyResponse> {
            return await this.surveyService.getSurveyById(id)
    };
    
    @Post()
    @UsePipes(ValidationPipe)
    async createSurvey(@Body() createSurveyDto: CreateSurveyDto): Promise<SurveyResponse> {
        return await this.surveyService.createSurvey(createSurveyDto);
    }

    @Patch('/:id')
    async updateSurvey(
        @Param('id') id: number, 
        @Body() body: any): Promise<SurveyResponse> {
        return await this.surveyService.updateSurvey(id, body);
    };
    
}
