import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRowComponent } from '../components/table-row/table-row.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableRowComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TableRowComponent

  ]
})
export class ComponentsModule { }
