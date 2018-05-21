import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MethodicsComponent} from './workspace/methodics/methodics.component';
import {UserComponent} from './workspace/user.component';
import {UsermainpageComponent} from './workspace/usermainpage/usermainpage.component';
import {HttpClient} from '@angular/common/http';
import {UsermethodicsService} from './services/usermethodics.service';

const routes: Routes = [
  {path: '', component: UserComponent, children: [
     {path: 'mainpage', component : UsermainpageComponent},
     {path: 'methodics', component : MethodicsComponent}
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
  declarations: [UserComponent, UsermainpageComponent, MethodicsComponent],
  providers: [UsermethodicsService]
})
export class UserRoutingModule { }
