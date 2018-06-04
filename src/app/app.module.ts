import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthComponent} from './components/auth/auth.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {AdminComponent} from './components/admin/workspace/admin.component';
import {RouteService} from './services/routeservice.service';
import {UserHolderService} from './services/userholder.service';
import {UserRoutingModule} from './components/user/user-routing.module';
import {AdminRoutingModule} from './components/admin/admin-routing.module';
import {AppRoutingModule} from './/app-routing.module';
import { StartMethodicsComponent } from './components/user/workspace/startmethodics/startmethodics.component';
import { AdminEditPageComponent } from './components/admin/admineditpage/admineditpage.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    UserRoutingModule,
    AdminRoutingModule
  ],
  providers: [AuthService, RouteService, UserHolderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
