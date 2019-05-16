import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipe/recipe.service';
import { Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Recipe } from '../recipe/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
   return this.http.put('https://ng-recipe-book-acf20.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://ng-recipe-book-acf20.firebaseio.com/recipes.json')
      .pipe(map(
      (res: Recipe[]) => {
        for (const recipe of res) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return res;
      }
    ))
      .subscribe(
        (res: Recipe[]) => {
          this.recipeService.setRecipes(res);
        }
      );
  }
}
