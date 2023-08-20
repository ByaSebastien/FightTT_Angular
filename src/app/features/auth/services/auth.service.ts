import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { TokenModel } from 'src/app/core/models/token.model';
import { environment } from 'src/environments/environment';
import { RegisterModel } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  login(model: LoginModel): Observable<TokenModel> {
    return this._http.post<TokenModel>(environment.apiBaseUrl + '/login', model)
  }

  register(model: RegisterModel): Observable<TokenModel> {
    return this._http.post<TokenModel>(environment.apiBaseUrl + '/register', model)
  }
}
