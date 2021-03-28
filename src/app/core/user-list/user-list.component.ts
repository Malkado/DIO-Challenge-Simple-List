import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserListService } from '../../core/user-list/user-list.service';
import { User } from '../../core/user-list/user-interfaces';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user: User[] = [];
  closeModal = true;
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

  removeUser(id: number): void {
    this.userService.removeUser(id).then(response => {
      console.log(response);
      this.allUsers();
    });
  }

  updateUser(user: any): void {
    this.userService.updateUser(user)
      .then(response => {
        this.userService.changeModalStatus(true);
        this.allUsers();
      });
  }

  creteUser(user: any): void {
    const data = {
      name: user.name,
      email: user.email,
      image: user.image ? user.image : 'https://pbs.twimg.com/profile_images/1249959893479706624/Gp7rlzXs.jpg'
    };
    this.userService.createUser(data)
      .then(response => {
        this.userService.changeModalStatus(true);
        this.allUsers();
      });
  }

  openModal(): void {
    this.userService.changeModalStatus(false);

  }

}
