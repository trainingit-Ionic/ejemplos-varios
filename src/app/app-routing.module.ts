import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  { path: '', redirectTo: 'platform', pathMatch: 'full' },
  { path: 'rutasimple/:id', component: PruebaComponent },
  { path: 'user', loadChildren: './pages/user/user.module#UserPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'splitpane', loadChildren: './splitpane/splitpane.module#SplitpanePageModule' },
  { path: 'page1', loadChildren: './page1/page1.module#Page1PageModule' },
  { path: 'page2', loadChildren: './page2/page2.module#Page2PageModule' },
  { path: 'page3', loadChildren: './page3/page3.module#Page3PageModule' },
  { path: 'button', loadChildren: './ui/button/button.module#ButtonPageModule' },
  { path: 'ui', loadChildren: './ui/ui.module#UiPageModule' },
  { path: 'action-sheet', loadChildren: './ui/action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'alert', loadChildren: './ui/alert/alert.module#AlertPageModule' },
  { path: 'badge', loadChildren: './ui/badge/badge.module#BadgePageModule' },
  { path: 'page4', loadChildren: './page4/page4.module#Page4PageModule' },
  { path: 'platform', loadChildren: './platform/platform.module#PlatformPageModule' }
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
