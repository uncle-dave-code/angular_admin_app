import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, ReplaySubject, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../model/auth/login';
import { LoginRespose } from '../model/auth/login-response';
import { SignUp } from '../model/auth/sign-up';
import { StorageService } from './storage.service';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginRespose: LoginRespose | null = null;

  constructor(
    private http: HttpClient, 
    private storageService: StorageService 
    ) { }

  check(): Observable<boolean> {
    if (this.isAuthenticated()) {
      return of(true);
    }

    if (!this.storageService.getToken()) {
      return of(false);
    }

    //TODO signInUsingToken();

    return of(true);
  }

  signIn(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<LoginRespose>(environment.AUTH_API + 'signin', loginRequest)
      .pipe(map(response => this.authenticateSuccess(response, loginRequest.rememberMe)));
  }

  signUp(signup: SignUp): Observable<any> {
    return this.http.post(environment.AUTH_API + 'signup',
      signup
    );
  }

  logout(): Observable<void> {
    return new Observable(observer => {
      this.storageService.clearToken();
      this.loginRespose = null;
      observer.complete();
    });
  }

  private authenticateSuccess(response: LoginRespose, rememberMe: boolean): void {

    this.storageService.storeToken(response, true);

    this.loginRespose = response;
  }

  isAuthenticated(): boolean {
    return this.loginRespose !== null;
  }

  getLoginData(): LoginRespose {
    return this.storageService.getLoginData();
  }
}
