import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent {
  @Input() user!: {
    name: string;
    email: string;
    phone: string;
    photo: string;
    projects: { name: string; description: string }[];
  };
}
