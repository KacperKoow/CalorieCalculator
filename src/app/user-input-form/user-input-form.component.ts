import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalorieCalculatorService } from '../calorie-calculator.service';

@Component({
  selector: 'app-user-input-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input-form.component.html',
  styleUrl: './user-input-form.component.scss',
})
export class UserInputFormComponent {
  private calorieCalculatorService = inject(CalorieCalculatorService);

  onSubmit(bodyWeight: string, activityLevel: string, goal: string) {
    this.calorieCalculatorService.calculateCalories({
      bodyWeight,
      activityLevel,
      goal,
    });
  }
}
