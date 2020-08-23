
<template>
    <div id="app" class="relative">
       
      <div class="block md:w-3/4  h-40 absolute inset-0 z-10 mx-auto">
        <h2 class="text-center text-white text-5xl">
          Hello
        </h2>
        <div class="container">
            <img class="block w-1/3 mx-auto " src="../assets/logo.png" alt="Vue.js">
        </div>
        <p class="text-white text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur dolore labore nemo! Tempore magnam iusto ab dicta velit alias saepe facere fuga ullam! Necessitatibus, voluptate eaque. Eligendi, ullam facilis!</p>
        <p class="text-white text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur dolore labore nemo! Tempore magnam iusto ab dicta velit alias saepe facere fuga ullam! Necessitatibus, voluptate eaque. Eligendi, ullam facilis!</p>
        <p class="text-white text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur dolore labore nemo! Tempore magnam iusto ab dicta velit alias saepe facere fuga ullam! Necessitatibus, voluptate eaque. Eligendi, ullam facilis!</p>
        
      </div>

      <vue-particles
        color="#dedede"
        :particleOpacity="0.8"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.5"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="h-screen bg-red-700 absolute  top-0 left-0 right-0 botton-0"
      >
      </vue-particles>
    </div>
 </template>

<script>

export default {
    components:{
        
    }
}
</script>
<style scoped>
  
</style>