import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Recipe } from 'src/app/models/recipe.model';
import { map, switchMap } from 'rxjs/operators';
import * as fromApp from '../../../store/app.reducer';
import * as RecipesActions from '../store/recipe.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalComponent } from '../ngb-modal/ngb-modal.component';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private store: Store<fromApp.AppState>,
     private router: Router,
      private route:ActivatedRoute,
      private modalService: NgbModal) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(params => {
          return +params['id'];
        }),
        switchMap(id => {
          this.id = id;
          return this.store.select('recipes');
        }),
        map(recipesState => {
          return recipesState.recipes.find((recipe, index) => {
            return index === this.id;
          });
        })
      )
      .subscribe(recipe => {
        this.recipe = recipe;
      });
  }
  onDeleteRecipe() {
    /* this.store.dispatch(new RecipesActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes/list']); */
   const modalRef = this.modalService.open(NgbModalComponent);
   modalRef.componentInstance.id = this.id;
  }
}

