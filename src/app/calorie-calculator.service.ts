import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalorieCalculatorService {
  calorieData = signal<
    | {
        calories: number;
        maxProteins: number;
        minProteins: number;
        maxCarbohydrates: number;
        minCarbohydrates: number;
        maxFats: number;
        minFats: number;
      }
    | undefined
  >(undefined);

  calculateCalories(userData: {
    bodyWeight: string;
    activityLevel: string;
    goal: string;
  }) {
    let basicCalories = +userData.bodyWeight * 22;

    if (userData.activityLevel === 'low') {
      basicCalories *= 1.4;
    } else if (userData.activityLevel === 'moderate') {
      basicCalories *= 1.7;
    } else if (userData.activityLevel === 'high') {
      basicCalories *= 2;
    }
    console.log(basicCalories);
    let calculateDate = {
      calories: 0,
      maxProteins: 0,
      minProteins: 0,
      maxCarbohydrates: 0,
      minCarbohydrates: 0,
      maxFats: 0,
      minFats: 0,
    };

    if (userData.goal === 'gain') {
      calculateDate.calories =
        (+userData.bodyWeight * 0.01 * 7000) / 30 + basicCalories;
      calculateDate.maxProteins = 2.3 * +userData.bodyWeight;
      calculateDate.minProteins = 1.8 * +userData.bodyWeight;
      calculateDate.maxFats = (calculateDate.calories * 0.3) / 9;
      calculateDate.minFats = (calculateDate.calories * 0.2) / 9;
      calculateDate.maxCarbohydrates =
        (calculateDate.calories -
          calculateDate.minFats * 9 -
          calculateDate.minProteins * 4) /
        4;
      calculateDate.minCarbohydrates =
        (calculateDate.calories -
          calculateDate.maxFats * 9 -
          calculateDate.maxProteins * 4) /
        4;
      this.calorieData.set(calculateDate);
      console.log(this.calorieData());
    } else if (userData.goal === 'lose') {
      calculateDate.calories =
        basicCalories - (+userData.bodyWeight * 0.03 * 7000) / 30;
      calculateDate.maxProteins = 2.8 * +userData.bodyWeight;
      calculateDate.minProteins = 2.3 * +userData.bodyWeight;
      calculateDate.maxFats = (calculateDate.calories * 0.25) / 9;
      calculateDate.minFats = (calculateDate.calories * 0.15) / 9;
      calculateDate.maxCarbohydrates =
        (calculateDate.calories -
          calculateDate.minFats * 9 -
          calculateDate.minProteins * 4) /
        4;
      calculateDate.minCarbohydrates =
        (calculateDate.calories -
          calculateDate.maxFats * 9 -
          calculateDate.maxProteins * 4) /
        4;
      this.calorieData.set(calculateDate);
      console.log(this.calorieData());
    }
  }
}
