import { IsNotEmpty, IsString, IsOptional, IsDate, IsBoolean } from "class-validator";

export class CreateSurveyDto {
    @IsNotEmpty()
    @IsString()
    full_name: string;

    @IsNotEmpty()
    @IsString()
    phone_number: string;

    @IsOptional()
    @IsDate()
    start_date: Date;

    @IsOptional()
    @IsBoolean()
    newsletter_subscription: boolean;
};