import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated: boolean = false; // Default value for demonstration

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }

  constructor() { }
}
