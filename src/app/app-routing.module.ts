import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminRoutingModule} from './components/admin/admin-routing.module';
import {UserRoutingModule} from './components/user/user-routing.module';
import {AuthComponent} from './components/auth/auth.component';


const appRoutes: Routes = [
  {
    path: '', component: AuthComponent, pathMatch: 'full'
  },
  {
    path: 'admin/workspace',
    loadChildren: 'app/components/admin/admin-routing.module#AdminRoutingModule'
  },
  {
    path: 'user/workspace',
    loadChildren: 'app/components/user/user-routing.module#UserRoutingModule'
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
