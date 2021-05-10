import {DeskEntity} from '../domain/desk.entity';

export class DeskModel {
  // TODO: Abstraction of storage
  getDesk = () => {
    return new DeskEntity([]);
  }
}