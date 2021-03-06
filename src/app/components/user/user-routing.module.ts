import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MethodicsComponent} from './workspace/methodics/methodics.component';
import {UserComponent} from './workspace/user.component';
import {UsermainpageComponent} from './workspace/usermainpage/usermainpage.component';
import {HttpClient} from '@angular/common/http';
import {UserMethodicsService} from './services/usermethodics.service';
import {StartMethodicsComponent} from './workspace/startmethodics/startmethodics.component';
import {UserGuard} from './guards/user.guard';
import {UserHolderService} from '../../services/userholder.service';
import {ContactsComponent} from './workspace/contacts/contacts.component';
import {DocumentationComponent} from './workspace/documentation/documentation.component';

const routes: Routes = [
  {path: '', component: UserComponent, children: [
     {path: 'mainpage', component : UsermainpageComponent},
     {path: 'methodics', component : MethodicsComponent},
     {path: 'methodics/startMethodics/:id', component: StartMethodicsComponent},
     {path: 'contacts', component: ContactsComponent},
     {path: 'documents', component: DocumentationComponent}
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
  declarations: [UserComponent, UsermainpageComponent, MethodicsComponent, StartMethodicsComponent, ContactsComponent, DocumentationComponent],
  providers: [UserMethodicsService, UserGuard]
})
export class UserRoutingModule { }
