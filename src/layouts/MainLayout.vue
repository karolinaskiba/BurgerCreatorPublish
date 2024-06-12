<template>
  <q-layout view="hhh lpR fFf">
    <HeaderComponent />

    <q-page-container class="bg-primary">
      <transition name="slide-down">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import HeaderComponent from '../components/sheard/HeaderComponent.vue';

defineOptions({
  name: 'MainLayout',
});
</script>
