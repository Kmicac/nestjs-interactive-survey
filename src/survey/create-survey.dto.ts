import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsEnum } from "class-validator";
import { PreferredLanguage } from "./enums/preferred-language.enum";
import { HowFound } from "./enums/how-found.enum";

export class CreateSurveyDto {
        
    @IsNotEmpty()
    @IsString()
    full_name: string;

    @IsNotEmpty()
    @IsString()
    phone_number: string;

    @IsOptional()
    start_date: Date;

    @IsNotEmpty()
    @IsEnum(PreferredLanguage)
    preferred_language?: PreferredLanguage;

    @IsNotEmpty()
    @IsEnum(HowFound)
    how_found?: HowFound;

    @IsOptional()
    @IsBoolean()
    newsletter_subscription: boolean;
};