import { IsString } from 'class-validator';

export class CreateSublessonDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
}
