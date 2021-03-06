import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

import { SplashScreenService } from '@app/core/services';
import { PageTitleService } from '@app/core/services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private splashScreen: SplashScreenService,
    private router: Router,
    private titleService: PageTitleService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    // this.subscribeToSettings();
    // this.subscribeToIsAuthenticated();
    this.subscribeToRouterEvents();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private subscribeToRouterEvents() {
    this.router.events.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(event => {
      if (event instanceof ActivationEnd) {
        this.titleService.setTitle(event.snapshot);
      }
    });
  }
}
