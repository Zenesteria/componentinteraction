import { Component, Input } from '@angular/core';
import { NgxSemanticModule } from 'ngx-semantic';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-custombutton',
  standalone: true,
  imports: [NgxSemanticModule],
  templateUrl: './custombutton.component.html',
  styleUrl: './custombutton.component.scss',
})
export class CustombuttonComponent {
  constructor(private notificationService: NotificationService) {}
  @Input({ required: true }) name!: string;

  onClick() {
    this.notificationService.showSuccessMessage(
      `${this.name} was clicked!`,
      this.name
    );
  }
}
