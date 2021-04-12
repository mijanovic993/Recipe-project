
export enum Ingredients {
  Flour = "Flour",
  Milk = "Milk",
  Oil = "Oil",
  Salt = "Salt",
  Sugar = "Sugar",
  Eggs = "Eggs",
  Tomatoes = "Tomatoes",
  Peppers = "Peppers",
  Cheese = "Cheese",
  Potatoes = "Potatoes",
  Meat = "Meat"
}

export class Ingredient {
  constructor(public name: Ingredients, public amount: number) {
  }
}
