<template>
  <q-page>
    <div class="row">
      <div class="col">
        <h1 class="text-center text-h4">
          {{ $t('main-title') }}
        </h1>
      </div>
    </div>
    <div class="row flex-sm-center">
      <div class="col-12 col-sm-6">
        <ingredients-list
          :ingredients="ingredients"
          :configuration="configuration"
          @ingredient-add="ingredientAdd"
          @ingredient-remove="ingredientRemove"
        />
      </div>
      <div class="col-12 col-sm-6">
        <burger-configuration
          :message="message"
          :validationstate="state"
          :configuration="configuration"
          :favouriteList="favouriteList"
          @save-burger="saveBurger"
          @clear-configuration="clearConfiguration"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import IngredientsList from '../../components/IngredientsList.vue';
import BurgerConfiguration from 'src/components/BurgerConfiguration.vue';
import { CompleteBurgerModel } from 'src/models/CompleteBurger.model';
import { IngredientModel } from 'src/models/Ingredient.model';
import { ValidationModel } from 'src/models/Validation.model';
import { useBurgerIngredienstListStore } from 'src/stores/burger-ingredients-list-store';
import { useConfigurationListStore } from 'src/stores/configuration-list-store';
import { useValidationStore } from 'src/stores/validation-configuration-store';
import { useFavouriteListStore } from 'src/stores/favourite-list-store';

import {
  checkValidationWhenAdded,
  checkValidationWhenRemove,
} from '../../helpers/validationHelpers';
import { reactive, ref } from 'vue';

const burgerIngredienstListStore = useBurgerIngredienstListStore();
const configurationListStore = useConfigurationListStore();
const validationStore = useValidationStore();
const favouriteListStore = useFavouriteListStore();

const ingredients = reactive<IngredientModel[]>(
  burgerIngredienstListStore.allElements
);
let configuration = ref<IngredientModel[]>(configurationListStore.allElements);
let favouriteList = ref<CompleteBurgerModel[]>(favouriteListStore.allElements);

let validationObjValue = ref<ValidationModel>(validationStore.getValidationObj);
let message = ref<string>(validationObjValue.value.message);
let state = ref<string>(validationObjValue.value.status);

function ingredientRemove(ingredientName: string) {
  let validationResult: ValidationModel = checkValidationWhenRemove(
    ingredientName,
    configuration.value
  );

  validationStore.setValidationObj(validationResult);

  if (!validationStore.getValidationObj.proceed) {
    message.value = validationStore.getValidationObj.message;
    state.value = validationStore.getValidationObj.status;
    return;
  }

  configurationListStore.removeElement(ingredientName);

  message.value = validationStore.getValidationObj.message;
  state.value = validationStore.getValidationObj.status;
}

function ingredientAdd(ingredientName: string) {
  let validationResult: ValidationModel = checkValidationWhenAdded(
    ingredientName,
    configuration.value
  );
  validationStore.setValidationObj(validationResult);

  if (!validationStore.getValidationObj.proceed) {
    message.value = validationStore.getValidationObj.message;
    state.value = validationStore.getValidationObj.status;
    return;
  }

  let ingredientToAdd: IngredientModel | null =
    ingredients.find(
      (ingredient: IngredientModel) => ingredient.name === ingredientName
    ) || null;

  if (ingredientToAdd !== null && ingredientToAdd !== undefined) {
    configurationListStore.addElement(ingredientToAdd);
  }

  message.value = validationStore.getValidationObj.message;
  state.value = validationStore.getValidationObj.status;
}
function saveBurger(completeBurger: CompleteBurgerModel) {
  favouriteListStore.addElement(completeBurger);
}
function clearConfiguration() {
  configurationListStore.resetStore();
  validationStore.resetStore();
  validationStore.resetStore();

  configuration.value.length = 0;
  configuration.value = configurationListStore.allElements;
  favouriteList.value = favouriteListStore.allElements;
  validationObjValue.value.proceed = false;
  validationObjValue.value.status = '';
  validationObjValue.value.message = '';
}
</script>

<style scoped lang="scss">
.text-h4 {
  color: $light;
  font-size: clamp(1.5rem, -16.5905rem + 24.1206vw, 3.5rem);
  line-height: 1.2;
  margin: 0 auto;
}
</style>
