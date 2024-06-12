<template>
  <div class="q-gutter-xs">
    <router-link text-color="black" to="/">
      <q-btn square class="button" size="sm">
        <q-icon color="black" :name="mdiHomeOutline" />
      </q-btn>
    </router-link>

    <router-link text-color="black" to="favourite-lis">
      <q-btn square class="button" size="sm">
        <q-icon color="black" :name="mdiHeartOutline" /> </q-btn
    ></router-link>
  </div>
</template>
<script setup lang="ts">
import { mdiHeartOutline } from '@quasar/extras/mdi-v6';
import { mdiHomeOutline } from '@quasar/extras/mdi-v6';
</script>
<style scoped lang="scss">
.q-btn.button {
  background-color: $light;
}
</style>
