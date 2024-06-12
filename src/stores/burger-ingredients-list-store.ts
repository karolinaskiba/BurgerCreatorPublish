import { defineStore } from 'pinia';
import { IngredientModel } from 'src/models/Ingredient.model';
import { IngredientNameEnum } from 'src/enums/IngredientName.enum';
import { getImageUrlByIngredientName } from 'src/utils/getIngredientImageUrl';

export const useBurgerIngredienstListStore = defineStore({
  id: 'burgerIngredienstList',

  state: () => ({
    list: [
      {
        name: IngredientNameEnum.BOTTOM_BUN,
        imageUrl: getImageUrlByIngredientName(IngredientNameEnum.BOTTOM_BUN),
      },
      {
        name: IngredientNameEnum.TOP_BUN,
        imageUrl: getImageUrlByIngredientName(IngredientNameEnum.TOP_BUN),
      },
      {
        name: IngredientNameEnum.TOMATO,
        imageUrl: getImageUrlByIngredientName(IngredientNameEnum.TOMATO),
      },
      {
        name: IngredientNameEnum.MEAT,
        imageUrl: getImageUrlByIngredientName(IngredientNameEnum.MEAT),
      },
      {
        name: IngredientNameEnum.FISH,
        imageUrl: getImageUrlByIngredientName(IngredientNameEnum.FISH),
      },
      {
        name: IngredientNameEnum.LETTUCE,
        imageUrl: getImageUrlByIngredientName(IngredientNameEnum.LETTUCE),
      },
      {
        name: IngredientNameEnum.CHEESE,
        imageUrl: getImageUrlByIngredientName(IngredientNameEnum.CHEESE),
      },
    ] as IngredientModel[],
  }),

  getters: {
    allElements(): IngredientModel[] {
      return this.list;
    },
  },

  actions: {
    addElement(item: IngredientModel) {
      this.list.push(item);
    },
    removeElement(item: IngredientModel) {
      const index = this.list.findIndex(
        (ingredient) => ingredient.name === item.name
      );
      if (index !== -1) {
        this.list.splice(index, 1);
      }
    },

    setElements(elements: IngredientModel[]) {
      this.list = elements;
    },
    resetStore() {
      this.list = [];
    },
  },
});

export type FavouriteListStore = ReturnType<
  typeof useBurgerIngredienstListStore
>;
