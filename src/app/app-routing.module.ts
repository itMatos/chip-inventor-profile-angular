import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileModule } from './features/profile/profile.module';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', loadChildren: () => import('./features/profile/profile.module').then((m) => m.ProfileModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProfileModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
