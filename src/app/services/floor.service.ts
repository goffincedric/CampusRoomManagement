import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Floor} from '../../utils/Floor';

@Injectable({
  providedIn: 'root'
})
export class FloorService {
  private floorUrl = 'api/floors';  // URL to web api

  constructor(private http: HttpClient) {
  }

  /** GET figures from the server */
  getFloors(): Observable<Floor[]> {
    return this.http.get<Floor[]>(this.floorUrl);
  }

  /** GET figure from the server by index */
  getFloor(id: number): Observable<Floor> {
    console.log(this.floorUrl + '?id=' + id);
    return this.http.get<Floor>(`${this.floorUrl}/${id}`);
  }
}
