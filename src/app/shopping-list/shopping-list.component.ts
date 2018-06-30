import { Component, OnInit, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from 'events';
import { TrustedHtmlString } from '@angular/core/src/sanitization/sanitization';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }

  ngOnInit() {
  }



}
