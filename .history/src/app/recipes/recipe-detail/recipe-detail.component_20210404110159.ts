import { Component, Input, OnInit } from '@angular/core';
import {Recipes} from '../recipes.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  @Input('passedToSibling') receivedRecipeObj: Recipes;

}
