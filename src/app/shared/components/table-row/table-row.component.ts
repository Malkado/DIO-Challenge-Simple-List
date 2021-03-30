import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserListService } from 'src/app/core/user-list/user-list.service';
import { User } from '../../../core/user-list/user-interfaces';
@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {
  @Input()
  user: User | any;

  isUpdating = false;

  @Input()
  setclose = false;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() create: EventEmitter<any> = new EventEmitter();
  constructor(
    private userService: UserListService
  ) {
  }


  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    // this.userService.modalClose.subscribe(status => {
    //   console.log(status);
    //   if (status) {
    //     this.setCloseModal();
    //   }
    //   else if (status === false) {
    //     this.setOpenModal();
    //   }
    // });
  }

  openCreate(): void {
    this.isUpdating = false;
  }

  openUpdate(): void {
    this.isUpdating = true;

  }

  removeUser(id: number): void {
    this.delete.emit(id);
  }

  updateUser(): void {
    this.update.emit(this.user);
  }

}
