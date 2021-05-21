import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('apply', 10),
    new Ingredient('banana', 10)
  ];
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  constructor() { }

  // Get list shopping-list
  getShoppingList(): Ingredient[] {
    return this.ingredients.slice();
  }

  // Create a shopping-list
  postShoppingList(ingredient: Ingredient): any {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  // Create a shopping-list
  deleteShoppingList(id: number): any {
    this.ingredients.splice(id, 1);
  }
}
