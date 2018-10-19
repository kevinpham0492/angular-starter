import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

import { HomePageComponent } from './home-page/home-page.component';
import { COMPONENTS } from './components';

const ANGULAR_MATERIAL_MODULES = [
  MatButtonModule
];

const routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'home.title'
  }
];

@NgModule({
  imports: [
    CommonModule,
    ...ANGULAR_MATERIAL_MODULES,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomePageComponent,
    ...COMPONENTS
  ]
})
export class HomeModule { }
