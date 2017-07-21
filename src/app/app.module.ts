import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { GeocachesComponent } from './geocaches/geocaches.component';
import { GeocacheDetailsComponent } from './geocache-details/geocache-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    GeocachesComponent,
    GeocacheDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
