import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    // for cross-component communication that a recipe is selected
    recipeSelected = new EventEmitter<Recipe>();
    
    // for populating the recipe data
    recipes: Recipe[] = [
        new Recipe("test recipe","test description", "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg"),
        new Recipe("another test recipe","test description", "https://assets.bonappetit.com/photos/57ae3e611b33404414975c0d/16:9/w_5120,c_limit/roasted-chicken-thighs-with-lemon-and-oregano.jpg")
      ];

      getRecipes() {
          return this.recipes.slice();
      }

}