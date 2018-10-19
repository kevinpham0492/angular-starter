import { Injectable } from '@angular/core';
import { throwError, of, Observable } from 'rxjs';
import { Credential, User } from '../models';

@Injectable()
export class AuthService {

  isAuthenticated(): boolean {
    return true;
  }

  login({ username, password }: Credential): Observable<User> {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (username !== 'demo') {
      return throwError('Invalid username or password');
    }

    return of({ name: 'User' });
  }

  logout() {
    return of(true);
  }
}
