import { Component, Input } from '@angular/core';
import { CardModule } from '@coreui/angular';

@Component({
  selector: 'app-project-card',
  imports: [CardModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project!: { title: string; description: string };
}
