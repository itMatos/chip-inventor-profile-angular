import { NgFor } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { ButtonModule, CardModule } from '@coreui/angular';
import { cilStar } from '@coreui/icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Contribution } from '../../../../../types/contribution.model';

@Component({
  selector: 'app-user-contributions',
  imports: [NgFor, CardModule, ButtonModule, FontAwesomeModule],
  templateUrl: './user-contributions.component.html',
  styleUrls: ['./user-contributions.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserContributionsComponent {
  @Input() contributions!: Contribution[];

  icons = { cilStar };
  faStar = faStar;
}
