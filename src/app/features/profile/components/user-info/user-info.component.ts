import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AvatarComponent, GridModule, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, AvatarComponent, TextColorDirective, GridModule],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
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
