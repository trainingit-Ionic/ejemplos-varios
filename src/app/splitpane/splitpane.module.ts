import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SplitpanePage } from './splitpane.page';

const routes: Routes = [
  {
    path: '',
    component: SplitpanePage,
    children: [
      {
        path: 'page1',
        children: [
          {
            path: '',
            loadChildren: '../page1/page1.module#Page1PageModule'
          }
        ]
      },
      {
        path: 'page2',
        children: [
          {
            path: '',
            loadChildren: '../page2/page2.module#Page2PageModule'
          }
        ]
      },
      {
        path: 'page3',
        children: [
          {
            path: '',
            loadChildren: '../page3/page3.module#Page3PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'page1',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SplitpanePage]
})
export class SplitpanePageModule {}
