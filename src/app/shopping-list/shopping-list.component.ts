import {
  Component,
  OnInit,
} from '@angular/core';
import { Ingredient } from '../shared/ingridient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  // @ViewChild('amountInput', {static: false})amountInput: ElementRef;
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() {}

  ngOnInit() {}
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  // ngAfterViewInit() {
  //   console.log(this.amountInput);
  //   // Access child properties or methods here
  //   if (this.amountInput) {
  //     // Do something with the child component or element
  //     console.log(this.amountInput.nativeElement);
  //   }
  // }
}
