import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatToolbarModule, MatButtonModule } from '@angular/material';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ToolbarComponent } from './main-layout/components/toolbar/toolbar.component';

const MATERIAL_MODULE = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FlexLayoutModule,
    ...MATERIAL_MODULE
  ],
  declarations: [
    MainLayoutComponent,
    ToolbarComponent
  ],
  exports: [
    MainLayoutComponent,
    ToolbarComponent,
    FlexLayoutModule
  ]
})
export class LayoutModule { }
