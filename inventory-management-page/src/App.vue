<!-- App.vue -->
<template>
  <div>
    <TopNav />
    <router-view />
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue';

export default {
  name: 'App',
  components: {
    TopNav,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
