import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserGetComponent } from './user-get/user-get.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { RoleAddComponent } from './role-add/role-add.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { RoleGetComponent } from './role-get/role-get.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';

const routes: Routes = [
  { path: 'user/create',
    component: UserAddComponent },
  { path: 'user/detail/:id/edit',
    component: UserEditComponent },
  { path: 'user',
    component: UserGetComponent },
  { path: 'user/detail/:id',
    component: UserDetailComponent},

  { path: 'role/create',
    component: RoleAddComponent },
  { path: 'role/detail/:id/edit',
    component: RoleEditComponent },
  { path: 'role',
    component: RoleGetComponent },
  { path: 'role/detail/:id',
    component: RoleDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }