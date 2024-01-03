import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Data } from '@angular/router';

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
    this.route.params.subscribe((data: Data): void => {
      this.recipeId = data['id'];
    });
  }

  onAddToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
