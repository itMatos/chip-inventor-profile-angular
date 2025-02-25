import { Component, Input } from '@angular/core';
import { AvatarModule, ButtonDirective, CardModule, GridModule } from '@coreui/angular';
import { cilEnvelopeClosed, cilStar } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [GridModule, CardModule, AvatarModule, ButtonDirective, IconDirective],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  @Input() user!: {
    name: string;
    email: string;
    phone: string;
    photo: string;
    projects: { title: string; description: string }[];
  };

  icons = { cilEnvelopeClosed, cilStar };

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
