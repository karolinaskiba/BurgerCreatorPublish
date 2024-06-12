import { defineStore } from 'pinia';
import { ValidationModel } from 'src/models/Validation.model';

export const useValidationStore = defineStore({
  id: 'validationStore',

  state: () => ({
    validationObj: {
      status: '',
      message: '',
      proceed: false,
    } as ValidationModel,
  }),

  getters: {
    getValidationObj(): ValidationModel {
      return this.validationObj;
    },
  },

  actions: {
    setValidationObj(element: ValidationModel) {
      this.validationObj = { ...element };
    },

    resetStore() {
      this.validationObj.message = '';
      this.validationObj.status = '';
      this.validationObj.proceed = null;
    },
  },
});

export type FavouriteListStore = ReturnType<typeof useValidationStore>;
