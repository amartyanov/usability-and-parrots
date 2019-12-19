import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page0Component } from './pages/page0.component';
import { Page1Component } from './pages/page1.component';
import { Page2Component } from './pages/page2.component';
import { Page3Component } from './pages/page3.component';
import { Page4Component } from './pages/page4.component';
import { Page5Component } from './pages/page5.component';
import { Page6Component } from './pages/page6.component';
import { Page7Component } from './pages/page7.component';
import { Page8Component } from './pages/page8.component';
import { Page9Component } from './pages/page9.component';
import { Page10Component } from './pages/page10.component';
import { Page11Component } from './pages/page11.component';
import { Page12Component } from './pages/page12.component';
import { Page16Component } from './pages/page16.component';
import { Page15Component } from './pages/page15.component';
import { Page14Component } from './pages/page14.component';
import { Page13Component } from './pages/page13.component';
import { Page17Component } from './pages/page17.component';

const routes: Routes = [
  {path: 'page/0', component: Page0Component},
  {path: 'page/1', component: Page1Component},
  {path: 'page/2', component: Page2Component},
  {path: 'page/3', component: Page3Component},
  {path: 'page/4', component: Page4Component},
  {path: 'page/5', component: Page5Component},
  {path: 'page/6', component: Page6Component},
  {path: 'page/7', component: Page7Component},
  {path: 'page/8', component: Page8Component},
  {path: 'page/9', component: Page9Component},
  {path: 'page/10', component: Page10Component},
  {path: 'page/11', component: Page11Component},
  {path: 'page/12', component: Page12Component},
  {path: 'page/13', component: Page13Component},
  {path: 'page/14', component: Page14Component},
  {path: 'page/15', component: Page15Component},
  {path: 'page/16', component: Page16Component},
  {path: 'page/17', component: Page17Component},
  {
    path: '',
    redirectTo: '/page/0',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
