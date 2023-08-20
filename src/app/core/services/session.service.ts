import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenModel } from '../models/token.model';

const storageKey = 'SESSION'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _data$: BehaviorSubject<TokenModel | undefined> = new BehaviorSubject<TokenModel | undefined>(undefined);

  get data$(): Observable<TokenModel | undefined> {
    return this._data$.asObservable();
  }

  get data(): TokenModel | undefined {
    return this._data$.value;
  }

  constructor() {
    const json = localStorage.getItem(storageKey);
    if (json) {
      this._data$.next(JSON.parse(json));
    }
  }

  start(token: TokenModel): void {
    localStorage.setItem(storageKey, JSON.stringify(token));
    this._data$.next(token);
  }

  stop(): void {
    localStorage.removeItem(storageKey);
    this._data$.next(undefined);
  }
}
