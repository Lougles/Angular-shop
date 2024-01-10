import {
  Component, OnDestroy,
  OnInit,
} from '@angular/core';
import { Ingredient } from '../shared/ingridient.module';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription
  constructor(private readonly shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged
      .subscribe((ingredients: Ingredient[]): void => {
        this.ingredients = ingredients
      })
  }
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
