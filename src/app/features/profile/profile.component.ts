import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  BadgeComponent,
  ButtonDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownModule,
  DropdownToggleDirective,
  GridModule,
  NavModule,
} from '@coreui/angular';
import { brandSet, cilFilter } from '@coreui/icons';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { Contribution } from '../../../types/contribution.model';
import { ProjectFilters } from '../../../types/project.model';
import { User } from '../../../types/user.model';
import { UserContributionsComponent } from './components/user-contributions/user-contributions.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    UserInfoComponent,
    UserProjectsComponent,
    UserContributionsComponent,
    NavModule,
    GridModule,
    BadgeComponent,
    DropdownModule,
    DropdownMenuDirective,
    DropdownItemDirective,
    DropdownToggleDirective,
    ButtonDirective,
    IconModule,
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [IconSetService],
})
export class ProfileComponent {
  constructor(private iconSet: IconSetService) {
    this.iconSet.icons = { cilFilter, ...brandSet };
  }
  user: User = {
    name: 'Thiago Silva',
    email: 'thiagosilva@gmail.com',
    phone: '+55 11 99999-9999',
    photo: 'https://via.placeholder.com/150',
    projects: [
      {
        title: 'Digital Chip Design',
        description: 'Projeto para o design e implementação de chips digitais de alta performance.',
        tags: ['Digital'],
      },
      {
        title: 'Analog Circuit Design',
        description: 'Projeto focado em circuitos analógicos para processamento de sinais de áudio e instrumentação.',
        tags: ['Analog'],
      },
      {
        title: 'Mixed-Signal Integration',
        description: 'Projeto que integra tecnologias digitais e analógicas em um único chip para aplicações híbridas.',
        tags: ['Mixed'],
      },
      {
        title: 'FPGA Development',
        description: 'Projeto para o desenvolvimento e prototipagem de sistemas digitais utilizando FPGAs.',
        tags: ['Digital'],
      },
      {
        title: 'ASIC Design',
        description: 'Projeto de design e otimização de ASICs para aplicações específicas de alta eficiência.',
        tags: ['Digital'],
      },
      {
        title: 'Embedded Systems',
        description:
          'Projeto de sistemas embarcados que combinam chips digitais, analógicos e mistos para soluções completas.',
        tags: ['Mixed'],
      },
      {
        title: 'Digital Signal Processing',
        description: 'Projeto para o processamento e análise de sinais digitais de áudio e instrumentação.',
        tags: ['Analog'],
      },
      {
        title: 'Microcontroller Programming',
        description: 'Projeto de programação de microcontroladores para aplicações de controle e automação.',
        tags: ['Analog'],
      },
    ],
  };

  selectedSection: 'projects' | 'contributions' | 'about' = 'projects';

  selectedFilter: ProjectFilters = 'All';

  filterOptions: ProjectFilters[] = ['All', 'Digital', 'Analog', 'Mixed'];

  get filteredProjects() {
    if (this.selectedFilter === 'All') {
      return this.user.projects;
    }
    return this.user.projects.filter(
      (project) => this.selectedFilter === 'All' || project.tags.includes(this.selectedFilter)
    );
  }

  setFilter(filter: ProjectFilters) {
    this.selectedFilter = filter;
  }

  contributions: Contribution[] = [
    {
      user: this.user,
      action: 'starred',
      timestamp: '5 horas atrás',
      project: {
        title: 'Digital Chip Design',
        description: 'Projeto para o design e implementação de chips digitais de alta performance.',
        tags: ['Digital'],
      },
    },
  ];
}
