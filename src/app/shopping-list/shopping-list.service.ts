import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingridient.module';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }
  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
