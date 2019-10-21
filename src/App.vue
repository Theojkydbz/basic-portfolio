<template>
  <div id="app">
    <TheNavBar class="menu" />
    <div class="router">
      <router-view/>
    </div>
  </div> 
</template>
<<<<<<< HEAD
<script>

import TheNavBar from '@/components/TheNavBar'

export default{
  components:{
    TheNavBar
  }
}

</script>
=======
 
>>>>>>> d6dc16d241f3df5d9db250ee72857bb56761403d
<style lang="scss">
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
