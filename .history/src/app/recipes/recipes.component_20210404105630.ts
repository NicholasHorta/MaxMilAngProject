import { Component, OnInit } from '@angular/core';
import {Recipes} from './recipes.model'
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  selectedRec: Recipes;
  
  blaw(xy: Recipes){
    this.selectedRec = xy
  }

  
}
