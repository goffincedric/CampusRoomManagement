import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Floor} from '../../utils/Floor';

@Injectable({
  providedIn: 'root'
})
export class FloorFirebaseService {
  allFloors: Observable<Floor[]>;

  constructor(private afs: AngularFirestore) {
    this.allFloors = this.afs.collection<Floor>('floors').valueChanges();
  }

  getFloors(): Observable<Floor[]> {
    return this.allFloors;
  }

  getFloor(id: number): Observable<Floor> {
    return this.afs.doc<Floor>('floors/' + id).valueChanges();
  }
}
