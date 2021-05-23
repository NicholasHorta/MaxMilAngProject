import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent  {
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Carrots', 2),
    new Ingredients('Cucumber', 1),
  ];

  onIngredientAdded(ingredient: Ingredients){
    this.ingredients.push(ingredient)
  }

}
