// utils/ingredientUtils.ts
import { IngredientNameEnum } from '../enums/IngredientName.enum';

export function getImageUrlByIngredientName(
  name: IngredientNameEnum
): string | null {
  switch (name) {
    case IngredientNameEnum.BOTTOM_BUN:
      return '../../src/assets/images/bottom-bun.png';
    case IngredientNameEnum.TOP_BUN:
      return '../../src/assets/images/top-bun.png';
    case IngredientNameEnum.TOMATO:
      return '../../src/assets/images/tomato.png';
    case IngredientNameEnum.MEAT:
      return '../../src/assets/images/ingredient-burger.png';
    case IngredientNameEnum.FISH:
      return '../../src/assets/images/ingredient-fish.png';
    case IngredientNameEnum.LETTUCE:
      return '../../src/assets/images/lettuce.png';
    case IngredientNameEnum.CHEESE:
      return '../../src/assets/images/ingredient-cheese.png';
    default:
      return null;
  }
}
