import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserListService } from '../../core/user-list/user-list.service';
import { User } from '../../core/user-list/user-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { UserModalComponent } from '../user-modal/user-modal.component';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user: User[] = [];
  setUser: User | any;
  closeModal = true;
  constructor(
    private userService: UserListService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.allUsers();
    // tslint:disable-next-line: deprecation
    this.userService.modalClose.subscribe(value => {
      this.allUsers();
    });
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



  // creteUser(user: any): void {
  //   const data = {
  //     name: user.name,
  //     email: user.email,
  //     image: user.image ? user.image : 'https://pbs.twimg.com/profile_images/1249959893479706624/Gp7rlzXs.jpg'
  //   };
  //   this.userService.createUser(data)
  //     .then(response => {
  //       this.allUsers();
  //     });
  // }


  openModal(userSet?: User, isUpdating?: boolean): void {
    const dataModal = isUpdating ? { user: userSet, updating: isUpdating } : { user: userSet };
    this.dialog.open(UserModalComponent, {
      data: dataModal
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });

  }

}
