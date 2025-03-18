import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserInputFormComponent } from './user-input-form/user-input-form.component';
import { NutritionResultsComponent } from './nutrition-results/nutrition-results.component';
import { ContainerComponent } from './shared/container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ContainerComponent,
    HeaderComponent,
    UserInputFormComponent,
    NutritionResultsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'calorie-calculator';
}
