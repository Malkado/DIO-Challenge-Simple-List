import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private url = environment.serverUrl;

  constructor(
    private http: HttpClient
  ) { }

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
    return this.http.put(this.url + 'users', user).toPromise();
  }
}
