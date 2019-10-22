<template>
  <div class="blog">
    <router-view />
    <router-link to="/" tag="a" class="back">&laquo; Back</router-link>
  </div>
</template>

<script>
import Vue from 'vue'
import store from '../store.js'

import { debug } from 'util';

export default {
    data () {
    const { state: {works}} = store
    return {
    }
  },
  computed: {
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