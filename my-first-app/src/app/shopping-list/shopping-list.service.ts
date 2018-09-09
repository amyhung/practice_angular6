import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

    ingreditentsChanged = new EventEmitter<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingreditentsChanged.emit(this.ingredients.slice());
    }

    addIngreditent(ingredients: Ingredient[]) {

        // for (let ingr of ingredients) {
        //     this.addIngredient(ingr);
        // }
        this.ingredients.push(...ingredients);
        this.ingreditentsChanged.emit(this.ingredients.slice());

    }

    updateIngreditent(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.ingreditentsChanged.emit(this.ingredients.slice());
    }

    deleteIngreditent(index: number) {

        // delete element from position index, delete '1' element
        this.ingredients.splice(index, 1);
        this.ingreditentsChanged.emit(this.ingredients.slice());

    }

}
