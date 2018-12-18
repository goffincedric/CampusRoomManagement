import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Floor} from '../../utils/Floor';

@Injectable({
  providedIn: 'root'
})
export class FloorFirebaseService {
  private collectionName = 'floors';
  private allFloors: Observable<Floor[]>;

  constructor(private afs: AngularFirestore) {
    this.allFloors = this.afs.collection<Floor>(this.collectionName).valueChanges();
  }

  getFloors(): Observable<Floor[]> {
    return this.allFloors;
  }

  getFloorsByCampus(campusId: string): Observable<Floor[]> {
    return this.afs.collection<Floor>(
      this.collectionName,
      ref => ref.where('campusId', '==', campusId).orderBy('floorNumber')
    ).valueChanges();
  }

  getFloor(id: string): Observable<Floor> {
    return this.afs.doc<Floor>(`${this.collectionName}/${id}`).valueChanges();
  }
}
