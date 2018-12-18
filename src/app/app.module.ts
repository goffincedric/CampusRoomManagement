import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RoomComponent} from './room/room.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FloorListComponent} from './floor-list/floor-list.component';
import {FloorMapComponent} from './floor-map/floor-map.component';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    FloorListComponent,
    FloorMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    AngularFireModule.initializeApp(environment.firebase),  // nodig voor alles
    AngularFirestoreModule.enablePersistence(),             // Cloud Firestore (met offline data persistence)
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
