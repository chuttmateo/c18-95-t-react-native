import { Test, TestingModule } from '@nestjs/testing';
import { SublectionsController } from './sublections.controller';
import { SublectionsService } from './sublections.service';

describe('SublectionsController', () => {
  let controller: SublectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SublectionsController],
      providers: [SublectionsService],
    }).compile();

    controller = module.get<SublectionsController>(SublectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
