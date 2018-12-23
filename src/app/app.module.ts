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
import {CampusHeaderComponent} from './campus-header/campus-header.component';
import {MenuComponent} from './menu/menu.component';
// Indien /list => childroute met path '' die redirect naar /list/groenplaats/1
const appRoutes = [
  {path: 'list', redirectTo: 'list/campus/groenplaats/floor/1', pathMatch: 'full'},
  {path: 'list/campus', redirectTo: 'list/campus/groenplaats/floor/1', pathMatch: 'full'},
  {path: 'list/campus/:slug', redirectTo: 'list/campus/:slug/floor/0', pathMatch: 'full'},
  {path: 'list/campus/:slug/floor', redirectTo: 'list/campus/:slug/floor/0', pathMatch: 'full'},
  {path: 'list/campus/:slug/floor/:floorIndex', component: FloorListComponent},
  {path: 'map', redirectTo: 'map/campus/groenplaats/floor/1', pathMatch: 'full'},
  {path: 'map/campus', redirectTo: 'map/campus/groenplaats/floor/1', pathMatch: 'full'},
  {path: 'map/campus/:slug', redirectTo: 'map/campus/:slug/floor/0', pathMatch: 'full'},
  {path: 'map/campus/:slug/floor', redirectTo: 'map/campus/:slug/floor/0', pathMatch: 'full'},
  {path: 'map/campus/:slug/floor/:floorIndex', component: FloorListComponent},
  {path: 'room/detail/:id', component: RoomDetailComponent},
  {path: '', redirectTo: '/list/campus/groenplaats/floor/1', pathMatch: 'full'},
  {path: '**', component: FloorListComponent} // Veranderen naar error component
];

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    FloorListComponent,
    FloorMapComponent,
    RoomDetailComponent,
    CampusHeaderComponent,
    MenuComponent
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
