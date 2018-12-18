import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Room} from '../../utils/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private roomsUrl = 'api/rooms';  // URL to web api

  constructor(private http: HttpClient) {
  }

  /** GET figures from the server */
  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomsUrl);
  }

  /** GET figure from the server by index */
  getRoom(id: number): Observable<Room> {
    console.log(this.roomsUrl + '?id=' + id);
    return this.http.get<Room>(`${this.roomsUrl}/${id}`);
  }
}
