import { NgFor } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CardModule } from '@coreui/angular';
import { Contribution } from '../../../../../types/contribution.model';

@Component({
  selector: 'app-user-contributions',
  imports: [NgFor, CardModule],
  templateUrl: './user-contributions.component.html',
  styleUrls: ['./user-contributions.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserContributionsComponent {
  @Input() contributions!: Contribution[];
}
