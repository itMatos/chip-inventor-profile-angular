import { NgFor } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import {
  BadgeModule,
  ButtonDirective,
  CardModule,
  ModalModule,
  ProgressComponent,
  ToastBodyComponent,
  ToastComponent,
  ToasterComponent,
  ToastHeaderComponent,
  TooltipDirective,
} from '@coreui/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-card',
  imports: [
    CardModule,
    ButtonDirective,
    BadgeModule,
    NgFor,
    TooltipDirective,
    FontAwesomeModule,
    ProgressComponent,
    ToasterComponent,
    ToastComponent,
    ToastHeaderComponent,
    ToastBodyComponent,
    ModalModule,
  ],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project!: { title: string; description: string; tags: string[] };

  liked = false;
  confirmModalVisible = false;
  solidHeart = solidHeart;
  regularHeart = regularHeart;

  likedProjectMessage = 'Adicionado aos favoritos';
  unlikedProjectMessage = 'Removido dos favoritos';

  position = 'bottom-center';
  visible = signal(false);
  percentage = signal(0);

  showLikedProjectMessage() {
    this.liked = true;
  }

  showUnlikedProjectMessage() {
    this.liked = false;
  }

  toggleToast() {
    if (this.liked) {
      this.showLikedProjectMessage();
    } else {
      this.showUnlikedProjectMessage();
    }
    this.visible.update((value) => !value);
  }

  onVisibleChange($event: boolean) {
    this.visible.set($event);
    this.percentage.set(this.visible() ? this.percentage() : 0);
  }

  onTimerChange($event: number) {
    this.percentage.set($event * 25);
  }

  onLikeClick() {
    if (this.liked) {
      this.confirmModalVisible = true;
    } else {
      this.liked = true;
      this.showToast();
    }
  }

  confirmDislike() {
    this.liked = false;
    this.confirmModalVisible = false;
    this.showToast();
  }

  showToast() {
    this.visible.set(true);
    setTimeout(() => this.visible.set(false), 3000);
  }
}
