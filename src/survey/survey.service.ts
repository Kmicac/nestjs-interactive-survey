import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSurveyDto } from './create-survey.dto';
import { SurveyResponse } from './survey.entity';
import { Repository } from 'typeorm';


@Injectable()
export class SurveyService {
    constructor(
        @InjectRepository(SurveyResponse)
        private surveyRepository: Repository<SurveyResponse>,
    ) { }

    async getSurveyById(id: number): Promise<SurveyResponse> {
        const surveyFounded = await this.surveyRepository.findOne({ where: { id: id } });

        if (!surveyFounded) {
            throw new NotFoundException(`Survey with id: '${id}' not found`);
        }

        return surveyFounded;
    }

    async createSurvey(createSurveyDto: CreateSurveyDto): Promise<SurveyResponse> {
        const { full_name, phone_number, start_date, newsletter_subscription, preferred_language, how_found } = createSurveyDto;

        const survey = new SurveyResponse;
        survey.full_name = full_name;
        survey.phone_number = phone_number;
        survey.start_date = start_date ? start_date : new Date();
        survey.preferred_language = preferred_language;
        survey.how_found = how_found;
        survey.newsletter_subscription = newsletter_subscription;
        await survey.save();

        return survey;
    }

    async updateSurvey(id: number, body: any): Promise<SurveyResponse> {
        const survey = await this.surveyRepository.findOne({ where: { id: id } });
        
        if (!survey) {
            throw new NotFoundException(`Sorry this survey couldn't be found`);
        }

        this.surveyRepository.merge(survey, body);

        return this.surveyRepository.save(survey);
    }

}
