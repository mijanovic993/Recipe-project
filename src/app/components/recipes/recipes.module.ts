import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeEntryComponent } from './recipe-entry/recipe-entry.component';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { IngredientListPipe } from './recipe-list/ingredient-list.pipe';
import { PreparationTimePipe } from './recipe-list/preparation-time.pipe';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { NgbModalComponent } from './ngb-modal/ngb-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    RecipeEntryComponent,
    RecipesComponent,
    RecipeListComponent,
    IngredientListPipe,
    PreparationTimePipe,
    RecipeDetailsComponent,
    NgbModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RecipesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class RecipesModule { }
