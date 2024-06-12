<template>
  <div v-if="ingredients.length > 0">
    <ul class="ingredients">
      <li v-for="(ingredient, index) in ingredientsList" :key="index">
        <ingredient-item
          :ingredient="ingredient"
          :quantity="
            configuration.filter((item) => item.name === ingredient.name).length
          "
          @ingredient-add="ingredientAdd"
          @ingredient-remove="ingredientRemove"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { IngredientModel } from 'src/models/Ingredient.model';
import IngredientItem from './IngredientItem.vue';

const emit = defineEmits(['ingredient-add', 'ingredient-remove']);
const props = defineProps<{
  ingredients: IngredientModel[];
  configuration: IngredientModel[];
}>();

const ingredientsList = ref<IngredientModel[]>(props.ingredients);

let configuration = ref<IngredientModel[]>(props.configuration);

function ingredientAdd(ingredientName: string) {
  emit('ingredient-add', ingredientName);
}

function ingredientRemove(ingredientName: string) {
  emit('ingredient-remove', ingredientName);
}

//observing configuration changes in props to  updating the quantity of ingredients

watch(
  () => props.configuration,
  (newElement: IngredientModel[]) => {
    configuration.value.length = 0;
    configuration.value = newElement;
  }
);
</script>
