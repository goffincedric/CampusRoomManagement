import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Room} from '../../utils/Room';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomFirebaseService {
  private collectionName = 'rooms';
  private roomsCollection: AngularFirestoreCollection<Room>;
  private allRooms: Observable<Room[]>;

  constructor(private afs: AngularFirestore) {
    this.roomsCollection = this.afs.collection<Room>(this.collectionName);
    this.roomsCollection.snapshotChanges().subscribe(actions => {
      this.allRooms = of(actions.map(action => {
        const data = action.payload.doc.data() as Room;
        data.id = action.payload.doc.id;
        return data;
      }));
    });
  }

  getRooms(): Observable<Room[]> {
    return this.allRooms;
  }

  getRoomsByFloor(floorId: string): Observable<Room[]> {
    return this.afs.collection<Room>(this.collectionName, ref => ref.where('floorId', '==', floorId))
      .snapshotChanges()
      .pipe(map(actions => actions.map(action => {
        const data = action.payload.doc.data() as Room;
        data.id = action.payload.doc.id;
        return data;
      })));
  }

  reserveRoom(roomId: string, hours: number): Promise<void> {
    const until = new Date(Date.now());
    if (+hours + until.getHours() > 23) {
      until.setDate(+1 + until.getDate());
      until.setHours(+hours + until.getHours() - 23);
    } else {
      until.setHours(+hours + until.getHours());
    }
    return this.roomsCollection.doc(roomId).update({occupied: true, reservedUntil: until.toJSON()});
  }

  unreserveRoom(roomId: string): Promise<void> {
    return this.roomsCollection.doc(roomId).update({occupied: false});
  }

  updateRoomCrowdedness(roomId: string, crowdedness: number): Promise<void> {
    return this.roomsCollection.doc(roomId).update({crowdedness: crowdedness});
  }
}
