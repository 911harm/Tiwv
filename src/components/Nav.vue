<template>
  <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-4 w-full">
  <div class="w-1/5 font-extrabold flex justify-between flex-wrap items-center ml-8">
    <a class=" w-50 hover:text-white " href="https://github.com/911harm/Tiwv">
    <span class="md:inline hidden">
      911Harm
      </span> 
    <img class="w-8 inline-block" src="../assets/gh.png" alt="github">
    </a>
  </div>
   <div class="block md:hidden" @click="menu =!menu">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
    </div>
  <div class="hidden md:flex w-1/5 justify-around items-center "> 
  <div class="flex justify-around items-center flex-nowrap"> 
  <router-link class="hover:text-white p-3 font-bold" to="/">Home</router-link> 
  <router-link class="hover:text-white p-3 font-bold" to="/about">Vue</router-link>
  <router-link class="hover:text-white p-3 font-bold" to="/about">Angular</router-link>
  </div>
  </div>
  
  <div :class="menu ? 'block' : 'hidden'" class="container">
    <a class="block pl-1 mt-3 text-white hover:bg-gray-500 rounded" href="https://github.com/911harm/Tiwv">911Harm</a>
    <a class="block pl-1 mt-3 text-white hover:bg-gray-500 rounded" @click.prevent="menu=false" href="/">Cerrar</a>
  </div>
</nav>
</template>


<script>
export default {
    name:'Nav',
    data(){
      return{
        menu:false
      }
    }
}
</script>

<style>

</style>