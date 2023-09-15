import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { PreferredLanguage } from './enums/preferred-language.enum';
import { HowFound } from './enums/how-found.enum';

@Entity('interactivesurvey') 
export class Survey {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  full_name: string;

  @Column()
  phone_number: string;

  @Column({ type: 'date', nullable: true }) 
  start_date: Date;

  @Column({ type: 'enum', enum: PreferredLanguage })
  preferred_language: PreferredLanguage;

  @Column({ type: 'enum', enum: HowFound })
  how_found: HowFound;

  @Column({ type: 'boolean', nullable: true }) 
  newsletter_subscription: boolean;
}
