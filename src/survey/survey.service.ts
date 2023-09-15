import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SurveyRepository } from './survey.repository';
import { CreateSurveyDto } from './create-survey.dto';
import { Survey } from './survey.entity';
import { PreferredLanguage } from './enums/preferred-language.enum';
import { HowFound } from './enums/how-found.enum';


@Injectable()
export class SurveyService {
    constructor(
        @InjectRepository(SurveyRepository)
        private surveyRepository: SurveyRepository
    ) {}


    async createSurvey(createSurveyDto: CreateSurveyDto): Promise<Survey> {
        const { full_name, phone_number, start_date, newsletter_subscription } = createSurveyDto;

        const survey = new Survey;
        survey.full_name = full_name;
        survey.phone_number = phone_number;
        survey.start_date = start_date;
        survey.preferred_language = PreferredLanguage.SPANISH;
        survey.how_found = HowFound.ONLINE_SEARCH;
        survey.newsletter_subscription = newsletter_subscription;

        return survey;
    }
}
