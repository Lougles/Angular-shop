import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const routes: Routes = [
  {path: '', component: RecipesComponent},
  {path: 'recipe', component: RecipesComponent, children: [
      {path: ':id', component: RecipeDetailComponent},
    ]},
  {path: 'shopping-list', component: ShoppingListComponent, children: [
      {path: ':id/edit', component: ShoppingEditComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
