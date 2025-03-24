import { Component, inject } from '@angular/core';
import { CalorieCalculatorService } from '../calorie-calculator.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-nutrition-results',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './nutrition-results.component.html',
  styleUrl: './nutrition-results.component.scss',
})
export class NutritionResultsComponent {
  calorieCalculatorService = inject(CalorieCalculatorService);
  data = this.calorieCalculatorService.calorieData;
}
