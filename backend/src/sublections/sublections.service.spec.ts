import { Test, TestingModule } from '@nestjs/testing';
import { SublectionsService } from './sublections.service';

describe('SublectionsService', () => {
  let service: SublectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SublectionsService],
    }).compile();

    service = module.get<SublectionsService>(SublectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
