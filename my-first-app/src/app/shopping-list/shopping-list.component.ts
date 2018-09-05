import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from './shopping-list.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[]

  constructor(private shoppingListService: ShoppingListService,
    private logServie: LoggingService) {
    this.logServie.log('ShoppingListComponent constructor');
  }

  ngOnInit() {
    this.logServie.log('ShoppingListComponent.ngOnInit');
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingreditentsChanged.subscribe(
      (ingredients: Ingredient[]) => { this.ingredients = ingredients }
    );
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   //console.log(ingredient.name + "," + ingredient.amount);
  //   //this.ingredients.push(ingredient);
  //   this.shoppingListService.addIngredient(ingredient);
  // }

}
