import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply test', 'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg'),
    new Recipe('Name', 'This is another name', 'https://static01.nyt.com/images/2023/03/19/multimedia/SS-Oven-Roasted-Chicken-Shawarma-phmt/SS-Oven-Roasted-Chicken-Shawarma-phmt-articleLarge.jpg?w=1280&q=75')
  ];
  @Output() recipe:EventEmitter<Recipe> = new EventEmitter<Recipe>();
  constructor() {
  }

  ngOnInit() {
  }
  handleRecipeClick(recipe: Recipe) {
    this.recipe.emit(recipe);
  }
}
