import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {Campus} from '../../utils/Campus';

@Injectable({
  providedIn: 'root'
})
export class CampusFirebaseService {
  private collectionName = 'campuses';
  private allCampuses: Observable<Campus[]>;

  constructor(private afs: AngularFirestore) {
    this.allCampuses = this.afs.collection<Campus>(this.collectionName).valueChanges();
  }

  getCampuses(): Observable<Campus[]> {
    return this.allCampuses;
  }

  getCampus(id: string): Observable<Campus> {
    return this.afs.doc<Campus>(`${this.collectionName}/${id}`).valueChanges();
  }

  getCampusBySlug(slug: string): Observable<Campus[]> {
    return this.afs.collection<Campus>(`${this.collectionName}`, ref => ref.where('slugUrl', '==', slug).limit(1)).valueChanges();
  }
}
