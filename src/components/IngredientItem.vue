<template>
  <div class="ingridient">
    <div class="row items-center justify-between">
      <q-btn
        round
        color="red"
        icon="add"
        size="xs"
        class="q-ma-sm"
        @click="ingredientAdd(ingredientElement.name)"
      />
      <span class="text-white">
        {{ quantityValue }}
      </span>
      <q-btn
        round
        color="green"
        icon="remove"
        size="xs"
        class="q-ma-sm"
        @click="ingredientRemove(ingredientElement.name)"
      />
    </div>
    <div class="row">
      <q-img
        v-if="ingredient.imageUrl !== null"
        :src="ingredient.imageUrl"
        :ratio="1"
        class="ingridient-img"
      />
    </div>
    <div>
      <p class="ingridient-name">{{ ingredient.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IngredientModel } from 'src/models/Ingredient.model';
import { reactive, ref, watch } from 'vue';

const emit = defineEmits(['ingredient-add', 'ingredient-remove']);
const props = defineProps<{ ingredient: IngredientModel; quantity: number }>();

let ingredientElement = reactive({ ...props.ingredient });
let quantityValue = ref(props.quantity);

function ingredientAdd(ingredientName: string) {
  emit('ingredient-add', ingredientName);
}
function ingredientRemove(ingredientName: string) {
  emit('ingredient-remove', ingredientName);
}

//observing configuration changes in props to  updating the quantity of ingredients
watch(
  [() => props.ingredient, () => props.quantity],
  ([newIngredient, newQuantity]) => {
    ingredientElement = { ...newIngredient };
    quantityValue.value = newQuantity;
  }
);
</script>
