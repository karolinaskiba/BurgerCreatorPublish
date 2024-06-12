import { IngredientNameEnum } from '../enums/IngredientName.enum';

export function getImageUrlByIngredientName(
  name: IngredientNameEnum
): string | null {
  switch (name) {
    case IngredientNameEnum.BOTTOM_BUN:
      return '/bottom-bun.png';
    case IngredientNameEnum.TOP_BUN:
      return '/top-bun.png';
    case IngredientNameEnum.TOMATO:
      return '/tomato.png';
    case IngredientNameEnum.MEAT:
      return '/ingredient-burger.png';
    case IngredientNameEnum.FISH:
      return '/ingredient-fish.png';
    case IngredientNameEnum.LETTUCE:
      return '/lettuce.png';
    case IngredientNameEnum.CHEESE:
      return '/ingredient-cheese.png';
    default:
      return null;
  }
}
