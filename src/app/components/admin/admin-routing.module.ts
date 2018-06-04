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
import {AdminEditPageComponent} from './admineditpage/admineditpage.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: AdminComponent, children: [
    {path: 'editpage', component : AdminEditPageComponent}
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [AdminComponent, AdminEditPageComponent],
  providers: []
})
export class AdminRoutingModule { }
