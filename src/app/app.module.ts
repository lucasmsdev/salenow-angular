import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListRoomsComponent } from './pages/list-rooms/list-rooms.component';

import { RoomDetailComponent } from './pages/room-detail/room-detail.component';
import { FormComponent } from './pages/form/form.component';
import { SafePipe } from './safe.pipe';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ListRoomsComponent,
    RoomDetailComponent,
    FormComponent,
    SafePipe,
    LoginComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
