import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RoomComponent} from './room/room.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
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
    AngularFireModule.initializeApp(environment.firebase),  // nodig voor alles
    AngularFirestoreModule,
    AngularFirestoreModule.enablePersistence()             // Cloud Firestore (met offline data persistence)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
