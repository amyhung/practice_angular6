import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'This is simply a test 1',
            'https://previews.123rf.com/images/peteers/peteers1608/peteers160800221/61209448-%EA%B0%90%EC%9E%90-%ED%8A%80%EA%B9%80-%EC%83%90%EB%9F%AC%EB%93%9C-%EB%B0%8F-%EB%82%A0%EC%B9%B4%EB%A1%9C%EC%9A%B4-%EB%AC%BC%EB%86%80%EC%9D%B4%EA%B0%80%EC%9E%88%EB%8A%94-%EC%86%8C%EC%8B%9C%EC%A7%80-%EB%8B%AD-%EA%BC%AC%EC%B9%98.jpg',
            [new Ingredient('Meat', 1), new Ingredient('French fries', 2)]),
        new Recipe(
            'Big Fat Burger',
            'This is simply a test 2',
            'http://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061701346777.png',
            [new Ingredient('Meat', 1), new Ingredient('Buns', 2)]
        )
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        // 把 recipes copy 一份新的出來，然後再回傳
        // 所以會建立另一個 array instance
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

}