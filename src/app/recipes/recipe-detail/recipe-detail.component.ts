import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit{
  @Input() recipe: Recipe;
  protected open = open;
  recipeId: number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recipeId = params['id'];
      // Здесь вы можете загрузить данные о рецепте по идентификатору this.recipeId
    });
  }

  onAddToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
