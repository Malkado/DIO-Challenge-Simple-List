import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { UserListService } from 'src/app/core/user-list/user-list.service';
import { User } from '../../../core/user-list/user-interfaces';
@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit, OnChanges {
  @Input()
  user: User | any;
  // @ViewChild('closeModal') closeModal: ElementRef;

  @Input()
  setclose = false;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();
  constructor(
    private userService: UserListService
  ) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(changes.setclose.firstChange);
    if (changes.setclose.firstChange) {
      const modalButtonClose = document.getElementById('closeModal');
      console.log(modalButtonClose);
      modalButtonClose ? modalButtonClose.click() : alert('error!');
    }
  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.userService.modalClose.subscribe(status => {
      if (status) {
        console.log(status);
        this.setCloseModal();
      }
    });
  }
  setCloseModal(): void {
    const modalButtonClose = document.getElementById('closeModal');
    modalButtonClose ? modalButtonClose.click() : alert('error!');

  }

  removeUser(id: number): void {
    this.delete.emit(id);
  }

  updateUser(): void {
    this.update.emit(this.user);
  }
}
