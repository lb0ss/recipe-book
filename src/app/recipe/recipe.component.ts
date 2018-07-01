import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;
  
  constructor() { }

  ngOnInit() {
  }

  
}
