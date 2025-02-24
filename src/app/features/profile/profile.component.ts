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
import { brandSet, cilFilter, cilPaperPlane } from '@coreui/icons';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ProjectFilters } from '../../../types/project.model';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    UserInfoComponent,
    UserProjectsComponent,
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
    this.iconSet.icons = { cilFilter, cilPaperPlane, ...brandSet };
  }
  user = {
    name: 'Thiago Silva',
    email: 'thiagosilva@gmail.com',
    phone: '+55 11 99999-9999',
    photo: 'https://via.placeholder.com/150',
    projects: [
      {
        title: 'Digital Chip Design',
        description: 'Projeto para o design e implementação de chips digitais de alta performance.',
        tags: ['Em andamento', 'Digital'],
      },
      {
        title: 'Analog Circuit Design',
        description: 'Projeto focado em circuitos analógicos para processamento de sinais de áudio e instrumentação.',
        tags: ['Finalizado', 'Analog'],
      },
      {
        title: 'Mixed-Signal Integration',
        description: 'Projeto que integra tecnologias digitais e analógicas em um único chip para aplicações híbridas.',
        tags: ['Em andamento', 'Digital', 'Analógico'],
      },
      {
        title: 'FPGA Development',
        description: 'Projeto para o desenvolvimento e prototipagem de sistemas digitais utilizando FPGAs.',
        tags: ['Prototipagem', 'Digital'],
      },
      {
        title: 'ASIC Design',
        description: 'Projeto de design e otimização de ASICs para aplicações específicas de alta eficiência.',
        tags: ['Em andamento', 'ASIC'],
      },
      {
        title: 'Embedded Systems',
        description:
          'Projeto de sistemas embarcados que combinam chips digitais, analógicos e mistos para soluções completas.',
        tags: ['Finalizado', 'Sistemas Embarcados'],
      },
      {
        title: 'Digital Signal Processing',
        description: 'Projeto para o processamento e análise de sinais digitais de áudio e instrumentação.',
        tags: ['Digital', 'DSP'],
      },
      {
        title: 'Microcontroller Programming',
        description: 'Projeto de programação de microcontroladores para aplicações de controle e automação.',
        tags: ['Microcontrolador', 'Em andamento'],
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
    return this.user.projects.filter((project) => project.tags.includes(this.selectedFilter));
  }

  setFilter(filter: ProjectFilters) {
    this.selectedFilter = filter;
  }
}
