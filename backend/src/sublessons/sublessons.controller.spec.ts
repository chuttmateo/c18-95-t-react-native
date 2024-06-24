import { Test, TestingModule } from '@nestjs/testing';
import { SublessonsController } from './sublessons.controller';
import { SublessonsService } from './sublessons.service';

describe('SublectionsController', () => {
  let controller: SublessonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SublessonsController],
      providers: [SublessonsService],
    }).compile();

    controller = module.get<SublessonsController>(SublessonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
