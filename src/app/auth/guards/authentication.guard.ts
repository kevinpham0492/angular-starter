import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Logger } from '@app/core/logger';
import { AuthService } from '../services';
import { CONFIG } from '../auth.config';


const log = new Logger('AuthenticationGuard');

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    log.debug('Not authenticated, redirecting...');
    this.router.navigate([CONFIG.LOGIN.PATH], { replaceUrl: true });
    return false;
  }
}
