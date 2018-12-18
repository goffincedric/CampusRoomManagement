import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Room} from '../../utils/Room';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RoomFirebaseService {
  private collectionName = 'rooms';
  private allRooms: Observable<Room[]>;

  constructor(private afs: AngularFirestore) {
    this.allRooms = this.afs.collection<Room>(this.collectionName).valueChanges();
  }

  getRooms(): Observable<Room[]> {
    return this.allRooms;
  }

  getRoomsByFloor(floorId: string): Observable<Room[]> {
    return this.afs.collection<Room>(this.collectionName, ref => ref.where('floorId', '==', floorId)).valueChanges();
  }

  getRoom(id: string): Observable<Room> {
    return this.afs.doc<Room>(`${this.collectionName}/${id}`).valueChanges();
  }
}
