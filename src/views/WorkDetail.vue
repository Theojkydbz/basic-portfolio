<template>
  <div class="blog">
    <router-view />
    <router-link to="/" tag="a" class="back">Home</router-link>
    <div class="footer"></div>
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
        document.body.style.position = '0';
        document.body.style.top = '0';
        window.scrollTo(0, parseInt(scrollY) * -1);
    }
        
}

</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Manrope Medium";
  src: url("../assets/fonts/manrope-medium.woff2") format("woff2");
}
@font-face {
  font-family: "Manrope Semibold";
  src: url("../assets/fonts/manrope-semibold.woff2") format("woff2");
}
.projet{
    margin: 0
}
.footer{
  padding:50px;
}
.back{
  margin: 0 40px;
}
/deep/ {
  section{
    margin-top: 70px;
    margin-bottom: 90px;

  }
    img {
      width:100%;
      border-radius:10px;
      margin-top:30px;
      margin-bottom:30px
    }
        
    p{
      font-weight: 400;
      font-size: 15px;
      color: #2E3642;
      letter-spacing: 0;
      line-height: 20px;
      margin-bottom: 20px;
    }
    h1{
      margin: 0px;

      font-family: Manrope Semibold;
      font-size: 32px;
      color: #2E3642;

      margin-top: 20px; 
      margin-bottom: 20px; 
    }

    h2{
      font-family: Manrope Medium;
      font-size: 22px;
      color: #2E3642;
      letter-spacing: 1px;

      margin-top: 50px; 
      margin-bottom: 20px; 
    }
    h3{
      margin: 0px;
      
      font-family: Manrope Medium;
      font-size: 18px;
      color: #2E3642;

      margin-top: 50px; 
      margin-bottom: 20px; 
    }

    ul{
      display:inline;
      li {
        margin: 0;
        list-style-type: none;
        p{
          margin: 0;
        }
        h3{
          margin: 0;
          margin-top: 20px;
          margin-bottom: 5px;
        }
      }
    }

    a {
      transition: all 0.9s cubic-bezier(0,0,0,1.39);
      color: #2E3642;
      box-shadow: inset 0px -3px 0 #2E3642;
    }
    a:visited { text-decoration: none; color:#2E3642; }
    a:hover { text-decoration: none; color:#2E3642; }
    a:focus { text-decoration: none; color:#2E3642; }
    a:hover, a:active {
      transition: all 0.2s cubic-bezier(.65,0,.62,1.39);
      background-size: 0px 50px;
      box-shadow: inset 0px -8px 0 rgba(24, 57, 113, 0.349);
    }
    blockquote {
      margin-top:50px;
      margin-bottom:50px;
      padding: 1em;
      border-left: 5px solid #999;
    }
    blockquote:before {
      display: none;
    }

    blockquote p {
      color: #2E3642;
      line-height: 2;
      font-size: 18px;
      margin:0;
    }
    /* Wave */

    hr {
      margin-top: 30px;
      margin-bottom: 30px;
      width: 100%;
      position: relative;
    }

    hr:before,
    hr:after {
      position: absolute;
      display: block;
      width: 20px;
      height: 30px;
      background-color: #2E3642;
      bottom: -22.5px;
    }

    hr:before {
      border-radius: 30px 0 0 30px;
      left: -2px;
    }

    hr:after {
      border-radius: 0 30px 30px 0;
      right: -2px;
    }

  }
      
section{
  padding: 0 40px;
}
@media only screen and (min-width : 730px){
  section{padding-right:11vh}
}



</style>