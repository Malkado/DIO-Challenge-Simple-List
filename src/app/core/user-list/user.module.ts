import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { ComponentsModule } from '../../shared/components/components.module';
import { MatDialogModule } from '@angular/material/dialog';
import { UserModalComponent } from '../user-modal/user-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserListComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ComponentsModule,
    MatDialogModule
  ],
  exports: [
  ]
})
export class UserModule { }
