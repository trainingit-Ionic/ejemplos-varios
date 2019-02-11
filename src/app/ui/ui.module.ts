import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UiPage } from './ui.page';

export const routes: Routes = [
  { 
    path: '', 
    component: UiPage, 
    children: [
      { path: 'buttons', loadChildren: './button/button.module#ButtonPageModule', data: { name: 'Buttons', icon: 'list'} },
      { path: 'alert', loadChildren: './alert/alert.module#AlertPageModule', data: { name: 'Alerts', icon: 'list'} },
      { path: 'action-sheet', loadChildren: './action-sheet/action-sheet.module#ActionSheetPageModule', data: { name: 'Action Sheet', icon: 'list'} },
      { path: 'badge', loadChildren: './badge/badge.module#BadgePageModule', data: { name: 'Badge', icon: 'list'} },
      { path: 'content', loadChildren: './content/content.module#ContentPageModule', data: { name: 'Content', icon: 'list'} },
      { path: 'toolbar', loadChildren: './toolbar/toolbar.module#ToolbarPageModule', data: { name: 'Toolbar', icon: 'list'} },
      { path: 'card', loadChildren: './card/card.module#CardPageModule', data: { name: 'Card', icon: 'list'}  },
      { path: 'checkbox', loadChildren: './checkbox/checkbox.module#CheckboxPageModule', data: { name: 'Checkbox', icon: 'list'}  },
      { path: 'chip', loadChildren: './chip/chip.module#ChipPageModule', data: { name: 'Chip', icon: 'list'}  },
      { path: 'fab', loadChildren: './fab/fab.module#FabPageModule', data: { name: 'FAB', icon: 'list'}  },
      { path: 'infinite-scroll', loadChildren: './infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule', data: { name: 'Infinite Scroll', icon: 'list'}  },
      { path: 'item', loadChildren: './item/item.module#ItemPageModule', data: { name: 'Item', icon: 'list'}  },
  ]
},
  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UiPage]
})
export class UiPageModule {}
