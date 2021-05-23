import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredients>();

  onAddItem() {
    const newIngName = this.nameInputRef.nativeElement.value
    const newIngAmount = this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredients(newIngName, newIngAmount)
    this.ingredientAdded.emit(newIngredient)
  }
}
