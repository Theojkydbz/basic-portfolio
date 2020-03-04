<template>
  <div class="blog">
    <router-link to="/" tag="a" class="back"><img class="back" href='/' src="@/assets/Home/back.svg"></img></router-link>
    <router-view />
  <!-- <div class="cta" v-for="(section, index) in Object.keys(entries)" :key="index">
    <h1>{{section}}</h1>
    <div class="card-wrapper">
      <div v-for="entry in entries[section]" :key="entry.id" class="card" @click="$router.push({name: entry.id})">
        <div class="card-top">
            <div class="img" :style="{'background-image':`linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(${entry.img})`}"> </div>
            <div class="text">
                <p class="metier">{{entry.metier}}</p>
                <h2 class="name">{{entry.title}}</h2>
                <p class='shorttext'>{{entry.description}}</p>
            </div>
        </div>
      </div>
    </div>
  </div> -->
    <div class="footer"></div>
  </div>
</template>

<script>
import BLOGENTRIES from '@/statics/data/blogs.json'

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
    entries() {
      return BLOGENTRIES
    }
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
.blog * *{
vertical-align:middle;
}

.cta{
  h1{
    margin-left: 0;
    margin-bottom: 40px;
  }
  .card-wrapper{
    padding-left: 0;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }


}
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

/deep/ {
  section{
    margin-bottom: 90px;

  }
    h1{
      margin-right:20px;
      margin-left:20px;
    }
    h2{
      margin-right:20px;
      margin-left:20px;
    }
        
    p{
      font-weight: 400;
      font-size: 16px;
      color: #2E3642;
      letter-spacing: 0;
      line-height: 30px;
      margin-bottom: 20px;
    }
    .marge{
      margin-right:20px;
      margin-left:20px;
    }
    iframe.proto{
      display:none;
    }
    iframe{
        border-radius:10px;
        margin-top:40px;
        margin-bottom:40px;
      }
    
      img {
      width:100%;
      
      margin-bottom:30px;
      }
      .phantom{
        display:none;
      }
      .back{
        margin-top:30px;
      }

    
    h1{
      margin: 0px;

      font-family: Manrope Semibold;
      font-size: 32px;
      color: #2E3642;

      margin-top: 20px; 
      margin-bottom: 20px;
      margin-right:20px;
      margin-left:20px;
    }

    h2{
      font-family: Manrope Medium;
      font-size: 22px;
      color: #2E3642;
      letter-spacing: 1px;

      margin-top: 50px; 
      margin-bottom: 20px;
      margin-right:20px;
      margin-left:20px;
    }
    h3{
      margin: 0px;
      
      font-family: Manrope Medium;
      font-size: 18px;
      color: #2E3642;

      margin-top: 50px; 
      margin-bottom: 20px;
      margin-right:20px;
      margin-left:20px;
    }

    ul{
      display:block;
      margin-top:40px;
      margin-bottom:40px;
      margin-right:20px;
      margin-left:20px;
      li {
        margin: 0;
        list-style-type: none;
        
        p{
          margin: 0;
          margin-right:30px;
        }
        h3{
          margin: 0;
          margin-top: 20px;
          margin-bottom: 5px;

          margin-right:40px;
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
      margin-right:50px;
      margin-left:50px;
      
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
    .back{
      position: fixed;
      width:50px;
      left: 15px;
      top: -15px;
      z-index:99;
      margin-left:0;
    }
    @media only screen and (min-width : 730px){
      .marge{
        margin-left:30px;
        margin-right:30px;
      }
      h1{
        margin-left:30px;
        margin-right:30px;
      }
      h2{
        margin-left:30px;
        margin-right:30px;
      }
      h3{
        margin-left:30px;
        margin-right:30px;
      }
      ul{
        margin-left:30px;
        margin-right:30px;
      }
      section{
        margin-top: 70px;
      }
      .back{
        display:none;
      }
      .mobileview{
        display:none;
      }
      img{
        border-radius:10px;
        margin-top: 30px;
      }
      p{
        font-size: 16px;
        line-height:28px;
      }
      
      iframe.proto{
        display:block;
        margin:0px auto;
        margin-top:40px;
        margin-bottom: 40px;
        border-width:10px;
        border-color:#2E3642;
        border-style:solid;
        border-radius:20px;
      }
    }
    @media only screen and (min-width : 1120px){
      .marge{
        margin-left:50px;
        margin-right:50px;
      }
      h1{
        margin-left:50px;
        margin-right:50px;
      }
      h2{
        margin-left:50px;
        margin-right:50px;
      }
      h3{
        margin-left:50px;
        margin-right:50px;
      }
      ul{
        margin-left:50px;
        margin-right:50px;
      }
    }

  }
      
section{
  padding-left:0vh;
  padding-right:0vh;
}

@media only screen and (min-width : 730px){
  section{
    padding-left:20vh;
    padding-right:10vh;
  }
  
}





@media only screen and (min-width : 1120px){
  section{
    padding-left:15vh;
    padding-right:15vh;
    }
}

@media only screen and (min-width : 1300px){
  section{
    padding-left:10vh;
    padding-right:15vh;
    }
}

@media only screen and (min-width : 1400px){
  section{
    padding-left:0vh;
    padding-right:15vh;
    }
}



</style>