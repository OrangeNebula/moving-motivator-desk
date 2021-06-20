import { DeskModel } from '../model/desk.model';
import { DeskEntity } from '../domain/desk.entity';

export class DeskViewModel {
  constructor(
    private readonly deskModel: DeskModel,
  ) {
  }

  getDesk(): DeskEntity {
    return this.deskModel.getDesk();
  }

  updateDesk(desk: DeskEntity): void {
    this.deskModel.updateDesk(desk);
  }
}
