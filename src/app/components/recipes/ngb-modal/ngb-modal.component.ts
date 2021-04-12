import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import * as RecipesActions from '../store/recipe.actions';
import * as fromApp from '../../../store/app.reducer';

@Component({
  selector: 'app-ngb-modal',
  templateUrl: './ngb-modal.component.html',
  styleUrls: ['./ngb-modal.component.scss'],
})
export class NgbModalComponent implements OnInit {
  @Input() id: number;
  constructor(
    public modal: NgbActiveModal,
    private store: Store<fromApp.AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onOk() {
    this.store.dispatch(new RecipesActions.DeleteRecipe(this.id));
    this.modal.close('Ok click');
    this.router.navigate(['/recipes/list']);
  }
}
