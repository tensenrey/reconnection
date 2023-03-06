import { Test, TestingModule } from '@nestjs/testing';
import { BroadcastsController } from './broadcasts.controller';

describe('BroadcastsController', () => {
  let controller: BroadcastsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BroadcastsController],
    }).compile();

    controller = module.get<BroadcastsController>(BroadcastsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
