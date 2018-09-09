import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription;

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private dDataStorageService: DataStorageService) {
  }

  ngOnInit() {

    // when add/edit recipe , below will be executed.
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );

    this.recipes = this.recipeService.getRecipes();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // onRecipeSelected(recipe: Recipe) {
  //   console.log('onRecipeSelected');
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  sendPost() {

    const servers = [
      { name: 'test111', capacity: 10 },
      { name: 'test222', capacity: 20 }
    ];

    this.dDataStorageService.storeServes(servers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );

  }

  getData() {
    this.dDataStorageService.getServers().subscribe(
      (data: any[]) => {
        console.log(data)
      },
      (error) => console.log(error)
    );
  }

}
