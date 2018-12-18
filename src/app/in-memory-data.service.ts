import {Injectable} from '@angular/core';
import {Room} from '../utils/Room';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {RoomType} from '../utils/RoomType';
import {Floor} from '../utils/Floor';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    const rooms = [
      new Room(1, 'room1.1', RoomType.AULA, 'account-group', 80, true, false, 20, 1, 1, 1, 1),
      new Room(2, 'room1.2', RoomType.BUREAU, 'desktop-tower-monitor', 40, false, true, 10, 1, 2, 1, 1),
      new Room(3, 'room1.3', RoomType.CAFETARIA, 'coffee', 70, false, false, 35, 2, 1, 1, 2),
      new Room(4, 'room1.4', RoomType.KLASLOKAAL, 'chair-school', 50, true, false, 0, 3, 1, 1, 1),
      new Room(5, 'room2.1', RoomType.CAFETARIA, 'coffee', 10, true, true, 10, 2, 1, 1, 2),
      new Room(6, 'room2.2', RoomType.STUDIELANDSCHAP, 'book-open-page-variant', 10, false, false, 0, 3, 1, 1, 1),
      new Room(7, 'room2.4', RoomType.VERGADERZAAL, 'clipboard-text', 10, true, true, 5, 4, 1, 2, 2),
      new Room(8, 'room3.1', RoomType.AULA, 'account-group', 40, true, false, 0, 1, 1, 1, 1),
      new Room(9, 'room3.2', RoomType.BUREAU, 'desktop-tower-monitor', 20, false, true, 15, 1, 2, 1, 1),
    ];

    const floors = [
      new Floor(1, 1, [rooms[0], rooms[1], rooms[2], rooms[3]]),
      new Floor(1, 1, [rooms[4], rooms[5], rooms[6]]),
      new Floor(1, 1, [rooms[7], rooms[8]]),
    ];
    return {rooms, floors};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the rooms array is empty,
  // the method below returns the initial number (11).
  // if the rooms array is not empty, the method below returns the highest
  // spinner id + 1.
  genId(rooms: Room[]): number {
    return rooms.length > 0 ? Math.max(...rooms.map(room => room.id)) + 1 : 11;
  }
}
