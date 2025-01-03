import { Component } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';

export  interface  User {
  name: string,
  age: number
}

@Component({
  selector: 'app-root',
  imports: [UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  user: User = { name: '', age: 0};
}
