import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})

export class RecipeItemComponent implements OnInit{
  recipe: Recipe;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.data.subscribe((data: Data): void => {
      this.recipe = data['recipe'];
    })
    console.log(this.recipe);
  }
}
