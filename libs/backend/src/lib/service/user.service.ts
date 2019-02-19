import { Injectable, Optional } from '@angular/core';
import { ApiConfig } from '../api-config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '@eshop/data-models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _rootUrl = '';

  constructor(
    @Optional() private apiConfig: ApiConfig,
    private http: HttpClient
  ) {
    if (apiConfig) {
      this._rootUrl = apiConfig.rootUrl;
    }
  }

  userById(id: number): Observable<User> {
    return this.http.get<User>(`${this._rootUrl}/api/users/${id}`);
  }

  users(searchTerm?: string): Observable<User[]> {
    return this.http.get<User[]>(`${this._rootUrl}/api/users`, {
      params: searchTerm ? { searchTerm } : null
    });
  }
}
