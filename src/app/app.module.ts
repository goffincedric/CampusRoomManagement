import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {RoomDetailComponent} from './room-detail/room-detail.component';
import {RouterModule} from '@angular/router';
import {CampusHeaderComponent} from './campus-header/campus-header.component';
import {MenuComponent} from './menu/menu.component';
import {RoomListItemComponent} from './floor-layout/room-list-item/room-list-item.component';
import {RoomMapItemComponent} from './floor-layout/room-map-item/room-map-item.component';
import {FloorLayoutComponent} from './floor-layout/floor-layout.component';

const appRoutes = [
  {path: ':layoutType', redirectTo: ':layoutType/groenplaats/0', pathMatch: 'full'},
  {path: ':layoutType/:slug', redirectTo: ':layoutType/:slug/0', pathMatch: 'full'},
  {path: ':layoutType/:slug/:floorNumber', component: FloorLayoutComponent},
  {path: ':redirectToType/room/detail/:id', component: RoomDetailComponent},
  {path: '', redirectTo: '/list/groenplaats/0', pathMatch: 'full'},
  {path: '**', component: FloorLayoutComponent} // Veranderen naar error component
];

@NgModule({
  declarations: [
    AppComponent,
    RoomDetailComponent,
    CampusHeaderComponent,
    MenuComponent,
    RoomListItemComponent,
    RoomMapItemComponent,
    FloorLayoutComponent
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
