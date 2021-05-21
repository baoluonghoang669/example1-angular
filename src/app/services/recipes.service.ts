import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('bao', 'baodeptrai', 'https://www.abbank.vn/uploads/images/2020/09/11/online-banking-700x472.jpg', [
      new Ingredient('meat', 10),
      new Ingredient('pork', 10)
    ]),
    new Recipe('vu', 'vuxautrai', 'https://anhdep123.com/wp-content/uploads/2020/11/anh-nong-ngoc-trinh-dep.jpg', [
      new Ingredient('doggy', 10),
      new Ingredient('oranges', 10)
    ])
  ];
  constructor() { }

  // Get list recipes
  getRecipes(): Recipe[] {
    return this.recipes;
  }

  // Add recipe to shopping-list
  addIngredientToShoppingList(ingredient: Ingredient[]): void {
    
  }
}
