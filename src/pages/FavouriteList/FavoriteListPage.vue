<template>
  <q-page class="row column items-center">
    <h1 class="text-center text-h4">
      {{ $t('Favourites Burgers Title') }}
    </h1>
    <h2
      v-if="burgers.length <= 0"
      class="text-center text-subtitle1 text-secondary"
    >
      {{ $t('You don’t have any favourites burgers') }}
    </h2>

    <ul class="burger-list">
      <li v-for="(burger, index) in burgers" :key="index" class="burger">
        <template v-if="burgers.length > 0">
          <div
            v-for="(ingredient, index) in burger.ingredients"
            :key="index"
            class="ingredient"
          >
            <img
              :src="ingredientImage(ingredient.imageUrl)"
              :ratio="1"
              class="ingredient-img"
              :class="ingredient.name"
              :style="{ zIndex: 50 - index }"
            />
          </div>
          <p class="burger-name">{{ burger.name }}</p>
          <q-btn
            @click="removeFromList(burger)"
            color="red"
            icon="delete"
            :label="$t('remove')"
          />
        </template>
      </li>
    </ul>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useFavouriteListStore } from '../../stores/favourite-list-store';
import { CompleteBurgerModel } from 'src/models/CompleteBurger.model';
import { replaceImage } from 'src/helpers/replaceImageHelper';

const favouriteListStore = useFavouriteListStore();

let burgers = computed(() => favouriteListStore.allElements);

onMounted(() => {
  favouriteListStore.loadFromLocalStorage();
});

// computed function to replacing images from the ingredient list with images for configuration
const ingredientImage = replaceImage();

function removeFromList(burger: CompleteBurgerModel) {
  favouriteListStore.removeElement(burger);
}
</script>
<style lang="scss" scoped>
.text-subtitle1 {
  text-wrap: wrap;
  width: 75%;
  max-width: 50rem;
  line-height: 1.5;
  font-size: clamp(1.25rem, 0.8462rem + 1.7949vw, 3rem);
  color: $blue;
}
.text-h4 {
  text-wrap: wrap;
  width: 75%;
  max-width: 30rem;
  color: $light;
  font-size: clamp(1.5rem, -16.5905rem + 24.1206vw, 3.5rem);
  line-height: 1.2;
}
.burger-list {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-wrap: wrap;
}

.burger {
  width: 20%;
  min-width: 250px;
  margin: 1rem;
}
.ingredient {
  max-width: 30vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.burger-name {
  color: $light;
  margin: 2rem 0 1rem;
  font-size: 1.2rem;
}
.ingredient-img {
  position: relative;
  max-width: 100%;
  &.lettuce {
    margin-bottom: calc(-100% / 20);
  }

  &.cheese {
    margin-bottom: calc(-100% / 12);
  }

  &.tomato {
    margin-bottom: calc(-100% / 12);
  }
}
</style>
