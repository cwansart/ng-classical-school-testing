import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { OverviewComponent } from './overview/overview.component';

export const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'overview',
    component: OverviewComponent,
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
