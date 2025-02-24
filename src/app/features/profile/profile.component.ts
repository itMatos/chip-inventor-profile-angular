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
      {
        title: 'Digital Chip Design',
        description: 'Projeto para o design e implementação de chips digitais de alta performance.',
      },
      {
        title: 'Analog Circuit Design',
        description: 'Projeto focado em circuitos analógicos para processamento de sinais de áudio e instrumentação.',
      },
      {
        title: 'Mixed-Signal Integration',
        description: 'Projeto que integra tecnologias digitais e analógicas em um único chip para aplicações híbridas.',
      },
      {
        title: 'FPGA Development',
        description: 'Projeto para o desenvolvimento e prototipagem de sistemas digitais utilizando FPGAs.',
      },
      {
        title: 'ASIC Design',
        description: 'Projeto de design e otimização de ASICs para aplicações específicas de alta eficiência.',
      },
      {
        title: 'Embedded Systems',
        description:
          'Projeto de sistemas embarcados que combinam chips digitais, analógicos e mistos para soluções completas.',
      },
    ],
  };

  selectedSection: 'projects' | 'contributions' | 'about' = 'projects';
}
