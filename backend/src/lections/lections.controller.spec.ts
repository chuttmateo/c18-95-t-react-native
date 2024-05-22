import { Test, TestingModule } from '@nestjs/testing';
import { LectionsController } from './lections.controller';
import { LectionsService } from './lections.service';

describe('LectionsController', () => {
  let controller: LectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LectionsController],
      providers: [LectionsService],
    }).compile();

    controller = module.get<LectionsController>(LectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
