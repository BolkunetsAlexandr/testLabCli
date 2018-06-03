import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from '../user/workspace/user.component';
import {StartMethodicsComponent} from '../user/workspace/startmethodics/startmethodics.component';
import {UsermainpageComponent} from '../user/workspace/usermainpage/usermainpage.component';
import {RouterModule, Routes} from '@angular/router';
import {MethodicsComponent} from '../user/workspace/methodics/methodics.component';
import {AdminComponent} from './workspace/admin.component';
import {UserMethodicsService} from '../user/services/usermethodics.service';
import {AdminmainpageComponent} from './adminmainpage/adminmainpage.component';

const routes: Routes = [
  {path: '', component: AdminComponent, children: [
    {path: 'mainpage', component : AdminmainpageComponent}
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [AdminComponent, AdminmainpageComponent],
  providers: []
})
export class AdminRoutingModule { }
