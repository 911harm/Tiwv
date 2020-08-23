<template>
  <div id="app">
      <Nav/>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->

    <router-view/>
    
  </div>
</template>

<script>

import Nav from './components/Nav'

export default {
  name:'App',
  components:{
    Nav
  }
}
</script>
