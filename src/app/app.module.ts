import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserGetComponent } from './user-get/user-get.component';
import { UserEditComponent } from './user-edit/user-edit.component';

import { UserService } from './user.service';
import { RoleService } from './role.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RoleAddComponent } from './role-add/role-add.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { RoleGetComponent } from './role-get/role-get.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserGetComponent,
    UserEditComponent,
    UserDetailComponent,
    RoleAddComponent,
    RoleEditComponent,
    RoleGetComponent,
    RoleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ UserService, RoleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }