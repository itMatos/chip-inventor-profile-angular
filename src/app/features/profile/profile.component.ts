import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule, UserInfoComponent, UserProjectsComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
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
}
