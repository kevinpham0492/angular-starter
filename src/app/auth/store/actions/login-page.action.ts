import { Action } from '@ngrx/store';
import { Credential } from '../../models';

export enum LoginPageActionTypes {
  LOGIN = '[Login Page] Login',
}

export class Login implements Action {
  readonly type = LoginPageActionTypes.LOGIN;

  constructor(public payload: { credential: Credential }) {}
}

export type LoginPageActionsUnion = Login;
