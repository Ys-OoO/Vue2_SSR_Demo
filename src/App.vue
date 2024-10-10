<template>
  <div id="app">
    <router-link to="/foo">Foo</router-link>
    <router-link to="/bar">Bar</router-link>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>

</style>
