import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import { Ingredients } from 'src/app/models/ingredient.model';
import * as RecipesActions from '../store/recipe.actions';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-entry',
  templateUrl: './recipe-entry.component.html',
  styleUrls: ['./recipe-entry.component.scss'],
})
export class RecipeEntryComponent implements OnInit {
  recipeForm: FormGroup;
  ranges;

  private storeSub: Subscription;

  get ingredientsControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }
  constructor(private store: Store<fromApp.AppState>,
    private router: Router) {}

  ngOnInit(): void {
    this.initForm();
    this.ranges = Object.values(Ingredients);
  }

  private initForm() {
    let recipeName = '';
    let recipeSource = '';
    let recipeIngredients = new FormArray([
      new FormGroup({
        name: new FormControl('', Validators.required),
        amount: new FormControl(0, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      }),
    ]);
    let recipePreparation = null;
    let recipeInstructions = '';
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      source: new FormControl(recipeSource, Validators.required),
      ingredients: recipeIngredients,
      preparationTime: new FormControl(recipePreparation, [Validators.required, Validators.pattern("^[0-9]*$")]),
      instructions: new FormControl(recipeInstructions, Validators.required),
    });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(0, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onSubmit() {
    this.store.dispatch(new RecipesActions.AddRecipe(this.recipeForm.value));
    this.router.navigate(['/recipes/list']);
  }
}
