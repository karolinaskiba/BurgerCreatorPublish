import { defineStore } from 'pinia';
import { CompleteBurgerModel } from '../models/CompleteBurger.model';

export const useFavouriteListStore = defineStore({
  id: 'favouriteList',

  state: () => ({
    list: [] as CompleteBurgerModel[],
  }),

  getters: {
    allElements(): CompleteBurgerModel[] {
      return this.list;
    },
  },

  actions: {
    addElement(item: CompleteBurgerModel) {
      this.list.push(item);
      this.saveToLocalStorage();
    },

    removeElement(item: CompleteBurgerModel) {
      const index = this.list.findIndex((burger) => burger.name === item.name);
      if (index !== -1) {
        this.list.splice(index, 1);
        this.saveToLocalStorage();
      }
    },

    setElements(elements: CompleteBurgerModel[]) {
      this.list = elements;
      this.saveToLocalStorage();
    },

    resetStore() {
      this.list = [];
      this.clearLocalStorage();
    },

    saveToLocalStorage() {
      localStorage.setItem('favouriteList', JSON.stringify(this.list));
    },

    loadFromLocalStorage() {
      const data = localStorage.getItem('favouriteList');
      if (data) {
        this.list = JSON.parse(data);
      }
    },

    clearLocalStorage() {
      localStorage.removeItem('favouriteList');
    },
  },
});

// Typ store'a
export type FavouriteListStore = ReturnType<typeof useFavouriteListStore>;
