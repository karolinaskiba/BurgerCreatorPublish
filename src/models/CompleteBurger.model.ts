import { IngredientModel } from './Ingredient.model';

export interface CompleteBurgerModel {
  name: string;
  ingredients: IngredientModel[];
}
