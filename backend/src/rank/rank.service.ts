import { Injectable } from '@nestjs/common';
import { ProgressService } from 'src/progress/progress.service';

@Injectable()
export class RankService {
  constructor(private readonly progressService: ProgressService) {}
  getRank() {
    return this.progressService.findAll();
  }
}
