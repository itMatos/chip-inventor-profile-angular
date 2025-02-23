import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProfileRoutingModule, UserInfoComponent, UserProjectsComponent, MatCardModule],
  exports: [UserInfoComponent, UserProjectsComponent],
})
export class ProfileModule {}
