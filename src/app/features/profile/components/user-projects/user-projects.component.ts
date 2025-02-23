import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-user-projects',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatIconModule, NgFor],
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css'],
})
export class UserProjectsComponent {
  @Input() projects!: { name: string; description: string }[];
}
