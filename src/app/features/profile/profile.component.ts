import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BadgeComponent, GridModule, NavModule } from '@coreui/angular';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, UserInfoComponent, UserProjectsComponent, NavModule, GridModule, BadgeComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileComponent {
  user = {
    name: 'Thiago Silva',
    email: 'thiagosilva@gmail.com',
    phone: '+55 11 99999-9999',
    photo: 'https://via.placeholder.com/150',
    projects: [
      { name: 'Projeto Angular', description: 'Aplicação para gerenciar tarefas' },
      { name: 'E-commerce App', description: 'Loja virtual desenvolvida em Angular' },
    ],
  };

  selectedSection: 'projects' | 'contributions' | 'about' = 'projects';
}
