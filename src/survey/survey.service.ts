import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SurveyRepository } from './survey.repository';
import { CreateSurveyDto } from './create-survey.dto';
import { Survey } from './survey.entity';


@Injectable()
export class SurveyService {
    constructor(
        @InjectRepository(SurveyRepository)
        private surveyRepository: SurveyRepository
    ) {}

    async createSurvey(createSurveyDto: CreateSurveyDto): Promise<Survey> {
        const { full_name, phone_number, start_date, newsletter_subscription, preferred_language, how_found } = createSurveyDto;

        const survey = new Survey;
        survey.full_name = full_name;
        survey.phone_number = phone_number;
        survey.start_date = start_date? start_date : new Date();
        survey.preferred_language = preferred_language;
        survey.how_found = how_found;
        survey.newsletter_subscription = newsletter_subscription;
        await survey.save();

        return survey;
    }
}
