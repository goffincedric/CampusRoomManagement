import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Room} from '../../utils/Room';
import {AngularFirestore} from '@angular/fire/firestore';
import {RoomType} from '../../utils/RoomType';

@Injectable({
  providedIn: 'root'
})
export class RoomFirebaseService {
  allRooms: Observable<Room[]>;

  constructor(private afs: AngularFirestore) {
    this.allRooms = this.afs.collection<Room>('rooms').valueChanges();
    this.afs.collection<Room>('rooms').add(new Room(1, 'room1.1', RoomType.AULA, 'account-group', 80, true, false, 20, 1, 1, 1, 1));
    this.afs.collection<Room>('rooms').add(new Room(2, 'room1.2', RoomType.BUREAU, 'desktop-tower-monitor', 40, false, true, 10, 1, 2, 1, 1));
    this.afs.collection<Room>('rooms').add(new Room(3, 'room1.3', RoomType.CAFETARIA, 'coffee', 70, false, false, 35, 2, 1, 1, 2));
    this.afs.collection<Room>('rooms').add(new Room(4, 'room1.4', RoomType.KLASLOKAAL, 'chair-school', 50, true, false, 0, 3, 1, 1, 1));
    this.afs.collection<Room>('rooms').add(new Room(5, 'room2.1', RoomType.CAFETARIA, 'coffee', 10, true, true, 10, 2, 1, 1, 2));
    this.afs.collection<Room>('rooms').add(new Room(6, 'room2.2', RoomType.STUDIELANDSCHAP, 'book-open-page-variant', 10, false, false, 0, 3, 1, 1, 1));
    this.afs.collection<Room>('rooms').add(new Room(7, 'room2.4', RoomType.VERGADERZAAL, 'clipboard-text', 10, true, true, 5, 4, 1, 2, 2));
    this.afs.collection<Room>('rooms').add(new Room(8, 'room3.1', RoomType.AULA, 'account-group', 40, true, false, 0, 1, 1, 1, 1));
    this.afs.collection<Room>('rooms').add(new Room(9, 'room3.2', RoomType.BUREAU, 'desktop-tower-monitor', 20, false, true, 15, 1, 2, 1, 1));
  }

  getFloor(id: number) {
  }
}
