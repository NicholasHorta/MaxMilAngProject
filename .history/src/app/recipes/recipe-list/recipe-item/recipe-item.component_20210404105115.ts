import { Component, Input, EventEmitter, Output } from '@angular/core';
import {Recipes} from '../../recipes.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() eachRecipeItem: Recipes;
  @Output() emitRecipeToParent = new EventEmitter<void>();
  sendRecipeItem(){
    this.emitRecipeToParent.emit()
  }
}
