import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  { path: 'roles',
    component: TabsPage,
    children: [
      {
        path:'register',
        children: [
          {
            path:'',
            loadChildren: './pages/register/register.module#RegisterPageModule'  
          }
        ]
      },
      {
        path: 'details',
        children: [
          {
            path: '',
            loadChildren: './pages/details/details.module#DetailsPageModule' 
          }
        ]
      },
      {
        path: 'personal',
        children: [
          {
            path: '',
            loadChildren:'./pages/personal-info/personal-info.module#PersonalInfoPageModule'

          },
          {
            path: 'privacy',
            loadChildren: './pages/personal-info/privacy/privacy.module#PrivacyPageModule'

          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class TabsRouterModule { }

