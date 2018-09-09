import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx'; // 這裡一定要加，不然下面的 .map() 方法會有 error
import { Observable } from "rxjs/Rx";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeService: RecipeService) {

    }

    storeRecipes() {
        return this.http.put('https://practiceangular6.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get('https://practiceangular6.firebaseio.com/recipes.json')
            .map((response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            })
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }

    storeServes(servers: any[]) {

        // const servers = [
        //     { name: 'test1', capacity: 10 },
        //     { name: 'test2', capacity: 20 }
        // ];

        return this.http.put('https://practiceangular6.firebaseio.com/data.json', servers);

        // this.http.post('https://practiceangular6.firebaseio.com/data.json', servers).subscribe(
        //     (response) => console.log(response),
        //     (error) => console.log(error)
        // );

    }

    getServers() {

        // map 方法主要是把要回傳的資料，改成自己想要的形式，再重新把成 Observerable 後回傳
        // 為什麼用 map，主要是因為，.get() 原先是回傳 response 物件，缺點是，前面拿到時
        // 得再重新轉成  json 後再操作，這裡直接利用 map 方法，重新包裝 Observerable 並且回傳自訂的資料格式
        return this.http.get('https://practiceangular6.firebaseio.com/data.json2')
            .map((response: Response) => {
                const data = response.json();
                return data;
            })
            .catch(
                (error: Response) => {
                    console.log(error);
                    return Observable.throw('Something went wrong');
                }
            );

    }

}