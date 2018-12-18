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
import {RoomDetailComponent} from './room-detail/room-detail.component';
import {RouterModule} from '@angular/router';
import { CampusHeaderComponent } from './campus-header/campus-header.component';
import { MenuComponent } from './menu/menu.component';
import { FloorsComponent } from './floors/floors.component';

const appRoutes = [
  {path: 'list/', component: FloorsComponent},
  {
    path: 'list/:slug',
    component: FloorsComponent,
    children: [
      {path: ':floorIndex', component: FloorListComponent}
    ]
  },
  {path: 'map/', component: FloorsComponent},
  {path: 'map/:slug/:floorIndex', component: FloorsComponent},
  {path: 'room/:id', component: RoomDetailComponent},
  {path: '', component: FloorsComponent},
  {path: '**', component: FloorsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    FloorListComponent,
    FloorMapComponent,
    RoomDetailComponent,
    CampusHeaderComponent,
    MenuComponent,
    FloorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),  // nodig voor alles
    AngularFirestoreModule,
    AngularFirestoreModule.enablePersistence(),             // Cloud Firestore (met offline data persistence)
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
