import { Component, Input } from '@angular/core';
import { AvatarModule, ButtonDirective, CardModule, GridModule } from '@coreui/angular';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [GridModule, CardModule, AvatarModule, ButtonDirective],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  @Input() user!: {
    name: string;
    email: string;
    phone: string;
    photo: string;
    projects: { name: string; description: string }[];
  };

  get initials(): string {
    if (!this.user || !this.user.name) {
      return '';
    }
    return this.user.name
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase())
      .join('');
  }
}
