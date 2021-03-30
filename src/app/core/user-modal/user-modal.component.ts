import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../user-list/user-interfaces';
import { UserListService } from '../user-list/user-list.service';

interface Data {
  user: User;
}

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {
  user: User | any;
  // userService: any;

  constructor(
    public dialogRef: MatDialogRef<UserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data,
    private userService: UserListService
  ) {
    this.user = data.user;
  }

  ngOnInit(): void {
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
        this.close();
      }).catch(error => {
        alert('Erro ao executar a operação');
      });
  }

  close(): void {
    this.dialogRef.close();
  }

  resetModal(): void {
    this.user = null;
    this.user = {};
  }
}
