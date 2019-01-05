import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FloorListComponent} from './list/floor-list/floor-list.component';
import {FloorMapComponent} from './floor plan/floor-map/floor-map.component';
import {environment} from '../environments/environment';
import {RoomDetailComponent} from './room-detail/room-detail.component';
import {RouterModule} from '@angular/router';
import {CampusHeaderComponent} from './campus-header/campus-header.component';
import {MenuComponent} from './menu/menu.component';
import {RoomListItemComponent} from './list/room-list-item/room-list-item.component';
import {RoomMapItemComponent} from './floor plan/room-map-item/room-map-item.component';

const appRoutes = [
  {path: 'list', redirectTo: 'list/campus/groenplaats/floor/0', pathMatch: 'full'},
  {path: 'list/campus', redirectTo: 'list/campus/groenplaats/floor/0', pathMatch: 'full'},
  {path: 'list/campus/:slug', redirectTo: 'list/campus/:slug/floor/0', pathMatch: 'full'},
  {path: 'list/campus/:slug/floor', redirectTo: 'list/campus/:slug/floor/0', pathMatch: 'full'},
  {path: 'list/campus/:slug/floor/:floorNumber', component: FloorListComponent},
  {path: 'map', redirectTo: 'map/campus/groenplaats/floor/0', pathMatch: 'full'},
  {path: 'map/campus', redirectTo: 'map/campus/groenplaats/floor/0', pathMatch: 'full'},
  {path: 'map/campus/:slug', redirectTo: 'map/campus/:slug/floor/0', pathMatch: 'full'},
  {path: 'map/campus/:slug/floor', redirectTo: 'map/campus/:slug/floor/0', pathMatch: 'full'},
  {path: 'map/campus/:slug/floor/:floorNumber', component: FloorMapComponent},
  {path: ':redirectToType/room/detail/:id', component: RoomDetailComponent},
  {path: '', redirectTo: '/list/campus/groenplaats/floor/0', pathMatch: 'full'},
  {path: '**', component: FloorListComponent} // Veranderen naar error component
];

@NgModule({
  declarations: [
    AppComponent,
    FloorListComponent,
    FloorMapComponent,
    RoomDetailComponent,
    CampusHeaderComponent,
    MenuComponent,
    RoomListItemComponent,
    RoomMapItemComponent
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
