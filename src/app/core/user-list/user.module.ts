import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { ComponentsModule } from '../../shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ComponentsModule,
    HttpClientModule
  ]
})
export class UserModule { }
