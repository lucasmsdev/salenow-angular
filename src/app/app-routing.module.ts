import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListRoomsComponent } from './pages/list-rooms/list-rooms.component';
import { RoomDetailComponent } from './pages/room-detail/room-detail.component';

const routes: Routes = [
  {path: '', component:LayoutComponent, children:[
    {path: '', component:ListRoomsComponent},
    {path: 'rooms/:id', component: RoomDetailComponent},
    {path: 'create', component: FormComponent}


  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
