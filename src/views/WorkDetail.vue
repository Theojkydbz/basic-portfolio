<template>
  <div class="blog">
    <router-view />
    <router-link to="/" tag="a" class="back">&laquo; Back</router-link>
  </div>
  <!-- <div class="projet">
    <div class="img"> </div>
        <div class="text">
            <p class="metier">Product Design</p>
            <h2 class="name">Smartimer Of Galaxy</h2>
            <p class='shorttext'>Workflow and project management together in a timer</p>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum mollitia, consequuntur asperiores aliquam consequatur harum quos. Autem numquam, ipsum, error recusandae dicta sequi dolores voluptas aliquam ipsa incidunt impedit corrupti?
    
    <h2> working project </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro esse eius, numquam, corrupti aut qui cumque excepturi ullam cum quisquam impedit reiciendis nesciunt pariatur sapiente repellat. Id dolorem culpa ipsum?</p>
    <img src="../assets/proj1/A.png">
    <img src="../assets/proj1/B.png">
    <img src="../assets/proj1/C.png">
    <img src="../assets/proj1/D.png">
    <img src="../assets/proj1/E.png">
    <img src="../assets/proj1/F.png">
    <img src="../assets/proj1/G.png">
    <img src="../assets/proj1/I.png">
    <img src="../assets/proj1/J.png">
  </div> -->
</template>

<script>
import Vue from 'vue'
import store from '../store.js'

import { debug } from 'util';

export default {
    data () {
    const { state: {works}} = store
    return {
      isFetching: false,
      error: null,
    }
  },
  computed: {
    isDataLoaded () {
      return this.works && this.works
    }
  },
  created() {
        let scrollY = document.body.style.top
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY) * -1);
    }
        
}

</script>

<style lang="scss" scoped>
.projet{
    margin: 0
}




       



</style>