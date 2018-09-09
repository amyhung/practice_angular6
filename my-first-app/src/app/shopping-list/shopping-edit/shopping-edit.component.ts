import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  //@ViewChild('nameInput') nameInputRef: ElementRef;
  //@ViewChild('amountInput') amountInputRef: ElementRef;

  //@Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('f') ngForm: NgForm;
  editMode = false;
  editedItemIndex: number;
  subscription: Subscription;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    console.log('ShoppingEditComponent init');
    // process the event which is when click shopping item in shopping list
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        console.log('you click ' + index)
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.ngForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    console.log(form);
    const value = form.value;

    console.log(value.name + "," + value.amount);
    const newOne = new Ingredient(value.name, value.amount);
    //this.ingredientAdded.emit(new Ingredient(ingName, ingAmount));
    if (this.editMode) {
      this.shoppingListService.updateIngreditent(this.editedItemIndex, newOne);
    } else {
      this.shoppingListService.addIngredient(newOne);
    }

    this.editMode = false;
    form.reset();

  }

  onClear() {
    this.ngForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngreditent(this.editedItemIndex);
    this.onClear()
  }

}
