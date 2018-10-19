import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthRoutingModule } from './auth-routing.module';
import { reducers } from './store/reducers';
import { AuthEffects } from './store/effects/auth.effects';
import { CONFIG } from './auth.config';
import { CONTAINERS_COMPONENTS } from './containers';
import { SHARED_COMPONENTS, ENTRY_COMPONENTS } from './components';
import { SERVICES } from './services';

const MATERIAL_MODULE = [
  MatFormFieldModule, MatInputModule, MatCheckboxModule, MatButtonModule, MatDialogModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(CONFIG.FEATURE_NAME, reducers),
    EffectsModule.forFeature([AuthEffects]),
    FlexLayoutModule,
    ...MATERIAL_MODULE,
    AuthRoutingModule
  ],
  declarations: [
    ...CONTAINERS_COMPONENTS,
    ...SHARED_COMPONENTS
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ],
  providers: [
    ...SERVICES
  ]
})
export class AuthModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: AuthModule
  //   }
  // }
}
