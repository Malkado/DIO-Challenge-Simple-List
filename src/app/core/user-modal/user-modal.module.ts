import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserModalComponent } from './user-modal.component';



@NgModule({
  declarations: [
    UserModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  entryComponents: [UserModalComponent]
})
export class UserModalModule { }
