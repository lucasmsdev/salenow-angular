import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/Rooms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css']
})
export class ListRoomsComponent implements OnInit {
  public rooms: Room[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadRooms();
  }

  public async loadRooms (){
    this.rooms = await this.apiService.get<Room[]>('rooms')
  }

   public showDetails(room: Room) {
     this.router.navigate(['rooms', room.id])
   }

}
