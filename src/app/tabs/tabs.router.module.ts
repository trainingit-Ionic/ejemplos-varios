import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
