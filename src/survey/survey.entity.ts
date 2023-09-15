import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  @Column()
  preferred_language: string;

  @Column()
  how_found: string;

  @Column({ type: 'boolean', nullable: true }) 
  newsletter_subscription: boolean;
}
