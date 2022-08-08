<template>
  <v-app id="inspire">

    <navigation-bar></navigation-bar>

    <side-bar></side-bar>

  </v-app>
</template>

<script>
import navigationBar from "@/components/Navigation-bar";
import sideBar from "@/components/Side-bar";
export default {
  name: 'App',

  components: {
    navigationBar,
    sideBar
  },

  data: () => ({
  }),
};
</script>

<style>
.body{
  background-image: url("assets/hello_Purple.jpg")
}
</style>