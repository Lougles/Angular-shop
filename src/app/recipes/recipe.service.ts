import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingridient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Ratatouille',
      'A super tasty ratatouille',
      'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Feirs', 20)
      ]
    ),
    new Recipe(
      2,
      'Fried potato',
      'What else you need to eat?',
      'https://static01.nyt.com/images/2023/03/19/multimedia/SS-Oven-Roasted-Chicken-Shawarma-phmt/SS-Oven-Roasted-Chicken-Shawarma-phmt-articleLarge.jpg?w=1280&q=75',
      [
        new Ingredient('Potato', 10),
        new Ingredient('Sauces', 2)
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
