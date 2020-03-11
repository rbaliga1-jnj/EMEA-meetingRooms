import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/common/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Room[];

  constructor(private _roomService: RoomService) { }

  ngOnInit() {
    this.listRooms();
  }

  listRooms(){
    this._roomService.getRooms().subscribe(
      data =>this.rooms=data
    )
  }

}
