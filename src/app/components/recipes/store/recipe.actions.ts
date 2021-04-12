import { Action } from '@ngrx/store';
import { Recipe } from 'src/app/models/recipe.model';

export const ADD_RECIPE = '[Recipe] Add Recipe';
export const DELETE_RECIPE = '[Recipe] Delete Recipe';

export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;

  constructor(public payload: Recipe) {}
}

export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPE;

  constructor(public payload: number) {}
}

export type RecipesActions = AddRecipe | DeleteRecipe;
