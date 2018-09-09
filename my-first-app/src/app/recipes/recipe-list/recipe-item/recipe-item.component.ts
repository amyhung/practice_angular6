import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // @Output() recipeSelected = new EventEmitter<void>();
  @Input('recipeItem') recipe: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(this.recipe.imagePath);
  }

  // onSelected() {
  //   console.log('onSelected');
  //   this.recipeService.recipeSelected.emit(this.recipe);
  //   //this.recipeSelected.emit();
  // }

}
