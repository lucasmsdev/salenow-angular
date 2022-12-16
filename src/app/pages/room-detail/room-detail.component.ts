import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Room } from 'src/app/models/Rooms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Comment } from '@angular/compiler';


@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  public room!: Room;
  public loading: boolean = true;
  public showDialog: boolean = false;
  public id:number = this.route.snapshot.params['id'];
  public path: string = `/rooms/${this.id}/delete`;
  public newComment: string = '';
  public commentsLoading: boolean = false;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,



  ) {  }

  ngOnInit(): void {
    this.loadRoom();

  }

  public async loadRoom() {
    this.loading = true;
    this.apiService.get<Room>(`rooms/${this.id}`).then( data => {
      this.room = data;
    }).finally( () => {
      this.loading = false;
    })


}

public delete(): void {
  if (window.confirm('Deseja remover? ')) {
    this.apiService.delete<Room>(this.path)
    .then( data => {
      // Se a a API retornar status 200..299
      this.router.navigateByUrl('');
    }).catch( response => {
      alert(response.error.error)
      // Se a API retornar status 400..599
    }).finally( () => {
      // Tanto faz o que a API responder
    });
}
}
public showEditDialog() {
  this.showDialog = true
}

public onCloseDialog(reload: boolean) {
  this.showDialog = false;
  if (reload) this.loadRoom()
}



public async sendComment(): Promise<void> {
  this.commentsLoading = true;
  let url: string = `rooms/${this.room.id}`
  this.apiService.post<Comment>(url, { content: this.newComment }).then( async () =>{
    let data = await this.apiService.get<Room>(`recommendations/${this.id}`)
    this.room.comments = data.comments
    this.newComment = ''
  }).finally( () => {
    this.commentsLoading = false;
  })
}




}
