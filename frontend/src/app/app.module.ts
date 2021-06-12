import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskCardComponent } from './components/TaskCard/taskCard.component';
import { TasksService } from './services/tasks.service';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TaskCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatRippleModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
