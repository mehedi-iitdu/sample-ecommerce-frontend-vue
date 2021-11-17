<template>
    <div class="relative min-h-screen md:flex">
        <side-bar />
        <home />
    </div>
</template>

<script>
import Home from './components/Home.vue';
import SideBar from "./components/SideBar.vue";

export default {
    name: "App",
    components: {
        SideBar,
        Home,
    },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
