import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColComponent, ContainerComponent, GutterDirective, RowComponent } from '@coreui/angular';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-user-projects',
  standalone: true,
  imports: [NgFor, ProjectCardComponent, ColComponent, RowComponent, GutterDirective, ContainerComponent],
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.scss'],
})
export class UserProjectsComponent {
  @Input() projects!: { title: string; description: string; tags: string[] }[];
}
