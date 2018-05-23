import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MethodicsComponent} from './workspace/methodics/methodics.component';
import {UserComponent} from './workspace/user.component';
import {UsermainpageComponent} from './workspace/usermainpage/usermainpage.component';
import {HttpClient} from '@angular/common/http';
import {UserMethodicsService} from './services/usermethodics.service';
import {StartMethodicsComponent} from './workspace/startmethodics/startmethodics.component';

const routes: Routes = [
  {path: '', component: UserComponent, children: [
     {path: 'mainpage', component : UsermainpageComponent},
     {path: 'methodics', component : MethodicsComponent},
     {path: 'methodics/startMethodics/:id', component: StartMethodicsComponent}
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
  declarations: [UserComponent, UsermainpageComponent, MethodicsComponent, StartMethodicsComponent],
  providers: [UserMethodicsService]
})
export class UserRoutingModule { }
