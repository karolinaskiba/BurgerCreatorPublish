import { defineStore } from 'pinia';
import { IngredientModel } from '../models/Ingredient.model';

export const useConfigurationListStore = defineStore({
  id: 'configurationList',

  state: () => ({
    list: [] as IngredientModel[],
  }),

  getters: {
    allElements(): IngredientModel[] {
      return this.list;
    },
  },

  actions: {
    addElement(item: IngredientModel) {
      this.list.unshift(item);
    },
    removeElement(ingredientName: string) {
      const index = this.list.findIndex(
        (ingredient: IngredientModel) => ingredient.name === ingredientName
      );
      if (index > -1) {
        this.list.splice(index, 1);
      } else return;
    },

    setElements(elements: IngredientModel[]) {
      this.list = elements;
    },
    resetStore() {
      this.list = [];
    },
  },
});

export type FavouriteListStore = ReturnType<typeof useConfigurationListStore>;
