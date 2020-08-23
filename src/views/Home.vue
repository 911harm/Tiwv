
<template>
    <div id="app" class="relative">
       
      <div class="block md:w-3/4 w-4/5 absolute inset-0 z-10 mx-auto h-full">
        <h2 class="text-center text-white text-5xl">
          Vue.js
        </h2>
        <div class="container">
            <img class="block w-1/3 mx-auto " src="../assets/logo.png" alt="Vue.js">
        </div>
        <p class="text-white text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur dolore labore nemo! Tempore magnam iusto ab dicta velit alias saepe facere fuga ullam! Necessitatibus, voluptate eaque. Eligendi, ullam facilis!</p>
        <p class="text-white text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur dolore labore nemo! Tempore magnam iusto ab dicta velit alias saepe facere fuga ullam! Necessitatibus, voluptate eaque. Eligendi, ullam facilis!</p>
        <img class="block mx-auto w-1/3 p-2" src="../assets/gh.png" alt="">
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
        class="h-screen bg-red-700 absolute inset-0 "
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
<style >
@import url('https://fonts.googleapis.com/css2?family=Rokkitt:wght@400;800&display=swap');
*{
font-family: 'Rokkitt', serif;

}
</style>