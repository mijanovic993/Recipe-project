import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from 'src/app/models/recipe.model';
import * as fromApp from '../../../store/app.reducer';
import * as RecipesActions from '../store/recipe.actions';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.subscription = this.store
      .select('recipes')
      .pipe(map(recipesState => recipesState.recipes))
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
  }

  onDetailsSubmit(id) {
    this.router.navigate([`/recipes/${id}`]);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onDelete(id) {
    this.store.dispatch(new RecipesActions.DeleteRecipe(id));
  }

}
