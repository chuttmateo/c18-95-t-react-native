import { IsString } from 'class-validator';

export class CreateSublectionDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
}
