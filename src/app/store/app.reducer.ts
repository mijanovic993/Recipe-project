import { ActionReducerMap } from '@ngrx/store';

import * as fromRecipes from '../components/recipes/store/recipe.reducer';

export interface AppState {
  recipes: fromRecipes.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  recipes: fromRecipes.recipeReducer
};
