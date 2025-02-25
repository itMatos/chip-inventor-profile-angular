import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AvatarModule, GridModule } from '@coreui/angular';
import { AboutComponent } from './components/about/about.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    UserInfoComponent,
    UserProjectsComponent,
    AboutComponent,
    GridModule,
    AvatarModule,
    ProjectCardComponent,
  ],
  exports: [UserInfoComponent, UserProjectsComponent],
})
export class ProfileModule {}
