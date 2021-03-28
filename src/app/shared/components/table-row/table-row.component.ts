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
    this.userService.modalClose.subscribe(status => {
      if (status) {
        this.setCloseModal();
      }
      else {
        this.setOpenModal();
      }
    });
  }
  setCloseModal(): void {
    const modalButtonClose = document.getElementById('closeModal');
    modalButtonClose ? modalButtonClose.click() : alert('error!');
  }

  setOpenModal(): void {
    const modalButtonOpen = document.getElementById('openModal');
    modalButtonOpen ? modalButtonOpen.click() : alert('error!');
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
  createUser(): void {
    this.create.emit(this.user);
  }
}
