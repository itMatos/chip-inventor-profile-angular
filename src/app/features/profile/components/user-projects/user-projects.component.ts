import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.scss'],
})
export class UserProjectsComponent {
  @Input() projects!: { name: string; description: string }[];
}
