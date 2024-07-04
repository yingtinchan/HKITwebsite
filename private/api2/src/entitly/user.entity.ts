import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn,
  CreateDateColumn,
  VersionColumn
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  student_id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  major_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
