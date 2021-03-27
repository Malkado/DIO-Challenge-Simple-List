import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRowComponent } from '../components/table-row/table-row.component';

@NgModule({
  declarations: [
    TableRowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableRowComponent
  ]
})
export class ComponentsModule { }
