<template>
  <div id="app">
    <TheNavBar class="menu" />
    <div class="router">
      <router-view/>
    </div>
  </div> 
</template>
<script>

import TheNavBar from '@/components/TheNavBar'

export default{
  components:{
    TheNavBar
  }
}

</script>
<style lang="scss">
@font-face {
  font-family: "Manrope Medium";
  src: url("/assets/fonts/manrope-medium.woff2") format("woff2");
}
@font-face {
  font-family: "Manrope Semibold";
  src: url("/assets/fonts/manrope-semibold.woff2") format("woff2");
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html, body, #app{
  margin: 0;
  padding: 0;
}

html, body {
    max-width: 100%;
    overflow-x: hidden;
}





.router{
  margin-left: 0;
}

.menu{
      display:none;
    }
@media only screen and (min-width : 730px){

    .router{
      margin-left: 30vw
    }
    .menu{
      display:block;
    }
}
</style>
