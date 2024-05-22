import { Test, TestingModule } from '@nestjs/testing';
import { LectionsService } from './lections.service';

describe('LectionsService', () => {
  let service: LectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LectionsService],
    }).compile();

    service = module.get<LectionsService>(LectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
