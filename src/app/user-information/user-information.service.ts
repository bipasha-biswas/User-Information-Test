import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  constructor(private http : HttpClient) { }

  fetchUserInformation () {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
