import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn2.iconfinder.com/data/icons/picnic-filledoutline/64/FOOD_RECIPE-recipe-ingredients-ingredient-education-recipes-orange-books-cooking-512.png'),
    new Recipe('B Test Recipe', 'This is simply a test', 'https://cdn2.iconfinder.com/data/icons/picnic-filledoutline/64/FOOD_RECIPE-recipe-ingredients-ingredient-education-recipes-orange-books-cooking-512.png'),
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
