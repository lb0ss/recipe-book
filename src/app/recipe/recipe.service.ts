import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping.list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    // for populating the recipe data
    recipes: Recipe[] = [
        new Recipe(
            "tasty sandwich",
            "super delicious, just awesome",
            "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg",
            [
              new Ingredient('Meat', 1),
              new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            "roasted chicken",
            "yummy",
            "https://assets.bonappetit.com/photos/57ae3e611b33404414975c0d/16:9/w_5120,c_limit/roasted-chicken-thighs-with-lemon-and-oregano.jpg",
            [
                new Ingredient('chicken', 2),
                new Ingredient('potato', 4)
            ])
      ];

      constructor(private slService: ShoppingListService) {

      }

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(id: number) {
          return this.recipes[id];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newrecipe: Recipe) {
        this.recipes[index] = newrecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }

}
