import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/Rooms';
import { ApiService} from 'src/app/services/api.service';
import { User } from 'src/app/models/user';

interface SuccessModel {}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent   {

  constructor(private apiService: ApiService, private router: Router) {}

  public formRoom: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image_url: new FormControl('', [Validators.required]),
    youtube_url: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),

  });

  public save(): void {
    this.apiService.post<Room[]>('rooms/create', this.formRoom.value).then( data => {
      this.router.navigateByUrl('/');
    }).catch((response) => {
      alert(response.error.error);
    });

  }
}









