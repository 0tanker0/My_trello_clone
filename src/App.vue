<template>
  <div class='body'>
    <navigation-bar></navigation-bar>
  </div>

</template>

<script>
import navigationBar from "@/components/Navigation-bar";
export default {
  name: 'App',

  components: {
    navigationBar
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