import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Credential } from '../../models';
import { State } from '../../store';
import { LoginPageActions } from '../../store/actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private store: Store<State> ) { }

  ngOnInit() {
  }

  onLogin(credential: Credential) {
    this.store.dispatch(new LoginPageActions.Login({ credential: credential }));
  }

}
