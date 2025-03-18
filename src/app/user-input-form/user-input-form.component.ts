import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input-form.component.html',
  styleUrl: './user-input-form.component.scss',
})
export class UserInputFormComponent {
  enteredBodyWeight = signal('');

  onSubmit() {}
}
