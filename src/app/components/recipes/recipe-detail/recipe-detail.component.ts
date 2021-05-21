import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() receivedRecipe!: Recipe;
  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    console.log(this.receivedRecipe);

  }

  addToShoppingList(): any {
    this.recipesService.addIngredientToShoppingList(this.receivedRecipe.ingredients);
  }
}
