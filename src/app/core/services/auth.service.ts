import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { STORAGE_APP_VERSION, STORAGE_LANGUAGE, STORAGE_TOKEN } from '../constants/core';
import { Endpoint } from '../constants/endpoints';
import { Token } from '../models/token';
import { StorageService } from './storage.service';

@Injectable()
export class AuthService {
  private token!: Token | null;
  public tokenChanged: BehaviorSubject<Token | null> = new BehaviorSubject<Token | null>(null); // using for generating menu

  private loginHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Basic ${environment.basicAuthKey}`,
  });

  constructor(
    private storageService: StorageService,
    private http: HttpClient,
    private router: Router
  ) {
    this.setToken(storageService.getData(STORAGE_TOKEN));
  }

  public login(username: string, password: string): Observable<any> {
    let parameters = {
      login: username,
      password: password
    };
    return this.http
      .post(Endpoint.withContextPath(Endpoint.TOKEN), parameters, { headers: this.loginHeaders })
      .pipe(map((response: any) => this.setToken(response)));
  }

  setToken(token: Token): void {
    console.log('token', token)
    if (!token) return;
    this.storageService.removeData(STORAGE_TOKEN);
    this.storageService.storeData(STORAGE_TOKEN, token);

    token = { ...token, ...(JSON.parse(atob(token.access_token.split('.')[1]))) };
    token.issued = new Date().getTime();
    this.token = token;
    this.updateTokenSubject();
  }

  public register(): void {
    alert('Register not implemented!');
  }

  refreshToken(): Observable<Token> {
    console.log('Refreshing token...')
    const parameters: string = `refresh_token=${this.token?.refresh_token}&grant_type=refresh_token`;
    return this.http
      .post<Token>(Endpoint.withContextPath(Endpoint.TOKEN), parameters, { headers: this.loginHeaders })
  }

  removeAuth(): void {
    console.log("Logout...");
    this.token = null;
    let currentVersion = this.storageService.getData(STORAGE_APP_VERSION);
    let currentLanguage = this.storageService.getData(STORAGE_LANGUAGE);
    localStorage.clear();
    if (currentVersion != null)
      this.storageService.storeData(STORAGE_APP_VERSION, currentVersion);
    if (currentLanguage != null)
      this.storageService.storeData(STORAGE_LANGUAGE, currentLanguage.toString());
    this.updateTokenSubject();
  }

  public hasRole(role: string): boolean {
    return true;
    // return this.token != null && this.token.roles && this.token.roles.includes(role);
  }

  public hasAnyRole(roles: string[]): boolean {
    return true;
    // return roles == null || (this.token != null && this.token.roles && roles.some(role => this.hasRole(role)));
  }

  public updateTokenSubject() {
    this.tokenChanged.next(this.token);
  }

  forgotPassword(): void {
    alert('Register not implemented!');
  }
}
