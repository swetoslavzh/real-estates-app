import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EstateListComponent } from './pages/estate/estate-list/estate-list.component';
import { EstateCreateComponent } from './pages/estate/estate-create/estate-create.component';
import { EstateDetailsComponent } from './pages/estate/estate-details/estate-details.component';
import { EstateResolver } from './data/services/estate.resolver';
import { EstateUpdateComponent } from './pages/estate/estate-update/estate-update.component';
import { ContactListComponent } from './pages/contact/contact-list/contact-list.component';
import { ContactDetailsComponent } from './pages/contact/contact-details/contact-details.component';
import { ContactCreateComponent } from './pages/contact/contact-create/contact-create.component';
import { ContactUpdateComponent } from './pages/contact/contact-update/contact-update.component';
import { ContactResolver } from './data/services/comtact.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/estates'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'estates',
    component: EstateListComponent
  },
  {
    path: 'estates/:id',
    component: EstateDetailsComponent,
    resolve: { estate: EstateResolver }
  },
  {
    path: 'estate-create',
    component: EstateCreateComponent
  },
  {
    path: 'estate-update/:id',
    component: EstateUpdateComponent,
    resolve: { estate: EstateResolver }
  },
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'contacts/:id',
    component: ContactDetailsComponent,
    resolve: { estate: ContactResolver }
  },
  {
    path: 'contacts-create',
    component: ContactCreateComponent
  },
  {
    path: 'contacts-update/:id',
    component: ContactUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
