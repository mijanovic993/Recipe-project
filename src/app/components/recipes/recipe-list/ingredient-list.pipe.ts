import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Pipe({
  name: 'ingredientList'
})
export class IngredientListPipe implements PipeTransform {
  ingredientNames = [];
  transform(value: Ingredient[], ...args: unknown[]): string {

    value.slice(0,3).map(
      i => {
        this.ingredientNames.push(i.name);
      }
    )
    return value.length <= 3 ? this.ingredientNames.join(',') : this.ingredientNames.join(',') + "...";
  }

}
