import { Test, TestingModule } from '@nestjs/testing';
import { LectionsController } from './lesson.controller';
import { LessonsService } from './lesson.service';

describe('LectionsController', () => {
  let controller: LectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LectionsController],
      providers: [LessonsService],
    }).compile();

    controller = module.get<LectionsController>(LectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
