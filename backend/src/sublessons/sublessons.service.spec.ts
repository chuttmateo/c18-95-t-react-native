import { Test, TestingModule } from '@nestjs/testing';
import { SublessonsService } from './sublessons.service';

describe('SublectionsService', () => {
  let service: SublessonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SublessonsService],
    }).compile();

    service = module.get<SublessonsService>(SublessonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
