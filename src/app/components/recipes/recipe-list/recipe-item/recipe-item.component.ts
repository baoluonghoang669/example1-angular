import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  constructor(private recipesService: RecipesService) {
  }

  ngOnInit(): void {
  }

  onSelected(): any {
    this.recipesService.recipeSelected.emit(this.recipe);
  }

}
