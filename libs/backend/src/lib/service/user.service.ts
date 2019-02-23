import { Injectable, Optional } from '@angular/core';
import { ApiConfig } from '../api-config';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '@e-shop/data-models';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$: Observable<any>;
  private _rootUrl = '';
  public TOKEN_ID = 'TOKEN';

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.isUserLoggedIn()
  );
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    @Optional() private apiConfig: ApiConfig,
    private http: HttpClient,
    private loaderService: LoaderService,
    private router: Router
  ) {
    if (apiConfig) {
      this._rootUrl = `${apiConfig.rootUrl}/user`;
    }
  }

  signUp(user: User) {
    return this.http.post<User>(`${this._rootUrl}/signup`, user);
  }

  login(user: User) {
    return this.http.post<User>(`${this._rootUrl}/login`, user);
  }

  deleteUser(id: string) {
    return this.http.delete<User>(`${this._rootUrl}/${id}`);
  }

  getAuthToken() {
    let authToken = '';
    if (localStorage.getItem(this.TOKEN_ID)) {
      authToken = `Bearer ${JSON.parse(
        window.atob(localStorage.getItem(this.TOKEN_ID))
      )}`;
    }
    return authToken;
  }

  isUserLoggedIn(): boolean {
    const userInfo = window.localStorage.getItem(this.TOKEN_ID);
    if (userInfo !== null && userInfo !== '') {
      return true;
    }
    return false;
  }

  redirectToLogin() {
    this.loaderService.hide();
    window.localStorage.removeItem(this.TOKEN_ID);
    this.router.navigate(['/', 'auth']);
  }
}
