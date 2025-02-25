import { NgFor } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardModule, ListGroupModule } from '@coreui/angular';
import { Experience } from '../../../../../types/experience.model';

@Component({
  selector: 'app-user-about',
  imports: [CardModule, ListGroupModule, NgFor],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutComponent {
  education = {
    institution: 'Universidade de São Paulo (USP)',
    degree: 'Engenharia de Computação',
    period: '2015 - 2020',
  };

  experiences: Experience[] = [
    {
      company: 'Empresa X',
      role: 'Engenheiro de Software',
      period: '2021 - Presente',
      description: 'Trabalhando em soluções de hardware e software para sistemas embarcados e chips digitais.',
    },
    {
      company: 'Startup Y',
      role: 'Desenvolvedor Full Stack',
      period: '2019 - 2021',
      description: 'Desenvolvimento de aplicações web para automação de processos de engenharia.',
    },
    {
      company: 'Laboratório Z',
      role: 'Pesquisador Júnior',
      period: '2018 - 2019',
      description: 'Pesquisa e desenvolvimento em circuitos analógicos para aplicações em IoT.',
    },
  ];
}
