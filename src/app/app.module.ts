import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthComponent} from './components/auth/auth.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {AdminComponent} from './components/admin/admin.component';
import {UserComponent} from './components/user/workspace/user.component';
import {RouterModule, Routes} from '@angular/router';
import {RouteService} from './services/routeservice.service';
import {UserHolderService} from './services/userholder.service';
import {MethodicsComponent} from './components/user/workspace/methodics/methodics.component';
import { UsermainpageComponent } from './components/shared/usermainpage/usermainpage.component';

const routes: Routes = [
  { path: '', component: AuthComponent, pathMatch: 'full'  },
  { path: 'admin/workspace', component:  AdminComponent, pathMatch: 'full',
    children: [
      {path: 'methodics', component : MethodicsComponent}
    ]},
  { path: 'user/workspace',  component: UserComponent , pathMatch: 'full'},
  {path: 'methodics', component : MethodicsComponent,  outlet: 'userRouter'}];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminComponent,
    UserComponent,
    MethodicsComponent,
    UsermainpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, RouteService, UserHolderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
