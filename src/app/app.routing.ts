import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GeocachesComponent } from './geocaches/geocaches.component';
import { GeocacheDetailsComponent } from './geocache-details/geocache-details.component';

const appRoutes: Routes = [
  {
  path: '',
  component: AdminComponent
  },
  {
  path: 'geocaches',
  component: GeocachesComponent
  },
  {
  path: 'geocaches/:person',
  component: GeocacheDetailsComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
