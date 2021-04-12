import { Ingredient } from "./ingredient.model";


export class Recipe {
  public name: string;
  public source: string;
  public preparationTime: number;
  public instructions: string;
  public ingredients: Ingredient[];

  constructor(name: string, source: string, prep: number, instr: string, ingredients: Ingredient[]) {
    this.name = name;
    this.source = source;
    this.preparationTime = prep;
    this.instructions = instr;
    this.ingredients = ingredients;
  }
}
