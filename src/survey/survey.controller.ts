import { Body, Controller, Post, Get, Param, UsePipes, ValidationPipe, Patch } from '@nestjs/common';
import { CreateSurveyDto } from './create-survey.dto';
import { SurveyService } from './survey.service';
import { SurveyResponse } from './survey.entity';


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
        const survey = await this.surveyService.createSurvey(createSurveyDto);
        return survey;
    }

    @Patch('/:id/update')
    @UsePipes(ValidationPipe)
    async updateSurvey(
        @Param('id') id: number, 
        @Body() updateSurveyDto: CreateSurveyDto): Promise<SurveyResponse> {
        return await this.surveyService.updateSurvey(id, updateSurveyDto);
    };
    
}
