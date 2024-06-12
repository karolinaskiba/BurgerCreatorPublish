import { IngredientNameEnum } from '../enums/IngredientName.enum';

export function getImageUrlByIngredientName(
  name: IngredientNameEnum
): string | null {
  switch (name) {
    case IngredientNameEnum.BOTTOM_BUN:
      return '/src/assets/bottom-bun.png';
    case IngredientNameEnum.TOP_BUN:
      return '/src/assets/top-bun.png';
    case IngredientNameEnum.TOMATO:
      return '/src/assets/tomato.png';
    case IngredientNameEnum.MEAT:
      return '/src/assets/ingredient-burger.png';
    case IngredientNameEnum.FISH:
      return '/src/assets/ingredient-fish.png';
    case IngredientNameEnum.LETTUCE:
      return '/src/assets/lettuce.png';
    case IngredientNameEnum.CHEESE:
      return '/src/assets/ingredient-cheese.png';
    default:
      return null;
  }
}
