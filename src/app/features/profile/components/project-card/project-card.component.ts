import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeModule, ButtonDirective, CardModule } from '@coreui/angular';

@Component({
  selector: 'app-project-card',
  imports: [CardModule, ButtonDirective, BadgeModule, NgFor],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project!: { title: string; description: string; tags: string[] };
}
