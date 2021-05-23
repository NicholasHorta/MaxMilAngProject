import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipes} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  @Output() finalGo = new EventEmitter<Recipes>()
  constructor() { }
  recipeItems: Recipes[] = [
    new Recipes('Danang Curry', 'Serves 4', 'http://singapore-companies-directory.com/images/Restaurants/Singapore_Indian_Food1.jpg'),
    new Recipes('Bart Steak', 'Serves 1', 'https://www.jasoningram.co.uk/wp-content/gallery/bart-spices/thumbs/thumbs_JI_030414_BartSpices_026.jpg')
  ]
  ngOnInit(): void {
  }

  passRecipeItemToParent(passedRecipeItem: Recipes){
    this.finalGo.emit(passedRecipeItem)
  }


}
