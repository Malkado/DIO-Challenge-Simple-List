import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, ObservableInput, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private url = environment.serverUrl;

  private objectData = new BehaviorSubject<any>(null);
  modalClose = this.objectData.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  changeModalStatus(status: any): void {
    this.objectData.next(status);
  }
  // Read all
  allUsers(): Promise<any> {
    return this.http.get(this.url + 'users').toPromise();
  }
  // Read one
  findUser(id: number): Promise<any> {
    return this.http.get(this.url + 'users/' + id).toPromise();
  }
  // Remove
  removeUser(id: number): Promise<any> {
    return this.http.delete(this.url + 'users/' + id).toPromise();
  }
  // UPDATE
  updateUser(user: any): Promise<any> {
    console.log(user);
    return this.http.put(this.url + 'users/' + user.id, user).toPromise();
  }

  // Create
  createUser(user: any): Promise<any> {
    return this.http.post(this.url + 'users', user).toPromise();
  }
}
