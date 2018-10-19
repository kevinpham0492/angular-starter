import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomPreloadModulesStrategy } from '@app/core/router';
import { MainLayoutComponent } from '@app/layout';
import { CONFIG } from './app.config';

const routes: Routes = [
  {
    path: CONFIG.MODULES.HOME.PATH,
    component: MainLayoutComponent,
    loadChildren: 'src/app/home/home.module#HomeModule'
  },
  {
    path: CONFIG.MODULES.DASHBOARD.PATH,
    loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '**',
    redirectTo: CONFIG.MODULES.HOME.PATH
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadModulesStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
