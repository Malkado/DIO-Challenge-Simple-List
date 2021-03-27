import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../core/user-list/user-interfaces';
@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {
  @Input() user: User | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
  }

}
