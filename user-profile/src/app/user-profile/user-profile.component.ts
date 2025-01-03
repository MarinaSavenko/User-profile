import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../app.component';

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  @Input() user!: User;
 
}
