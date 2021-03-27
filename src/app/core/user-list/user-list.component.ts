import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../core/user-list/user-list.service';
import { User } from '../../core/user-list/user-interfaces';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user: User[] = [];
  constructor(
    private userService: UserListService
  ) { }

  ngOnInit(): void {
    this.allUsers();
  }
  allUsers(): void {
    this.userService.allUsers().then(response => {
      if (response) {
        this.user = response;
      }
    });
  }

}
