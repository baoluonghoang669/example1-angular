import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('amountInput') amountInput!: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    const nameIngredient = this.nameInput.nativeElement.value;
    const amountIngredient = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(nameIngredient, amountIngredient);
    this.shoppingListService.postShoppingList(newIngredient);
  }

  onDelete(id: number): void {
    this.shoppingListService.deleteShoppingList(id);
  }
}
