import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Room} from '../common/room';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl="http://localhost:8080/api/v1/rooms";

  constructor(private httpClient: HttpClient) { }

  getRooms(): Observable<Room[]>{
    return this.httpClient.get<GetResponseRooms>(this.baseUrl).pipe(
      map(response=> response._embedded.rooms)
    );
  }
}

interface GetResponseRooms{
  _embedded:{
    rooms:Room[];
  }
}
