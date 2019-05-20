import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipe/recipe.service';
import { Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Recipe } from '../recipe/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
    ) {}

  storeRecipes() {
   const token = this.authService.getToken();

   return this.http.put('https://ng-recipe-book-acf20.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.http.get('https://ng-recipe-book-acf20.firebaseio.com/recipes.json?auth=' + token)
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
