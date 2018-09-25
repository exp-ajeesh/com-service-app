import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProvidersComponent } from './providers/providers.component';
import { UsersComponent } from './users/users.component';
import { DataService } from "src/app/data.service";


@NgModule({
  declarations: [
    AppComponent,
    ProvidersComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
