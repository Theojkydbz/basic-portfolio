<template>
  <div class="blog">
    <router-link to="/" tag="a" class="back"><img class="back" href='/' src="@/assets/Home/back.svg"></img></router-link>
    <router-view />
  
    <h1>{{section}}</h1>
    <div class="card-wrapper">
      <div v-for="entry in entries" :key="entry.id" class="card" @click="$router.push({name: entry.id})">
        <div class="card-top">
            <div class="img" :style="{'background-image':`url(${entry.img})`}"> </div>
            <div class="text">
                <p class="metier">{{entry.metier}}</p>
                <div class="bottom">
                  <h2 class="name">{{entry.title}}</h2>
                  <p class='shorttext'>{{entry.description}}</p>
                </div>
            </div>
        </div>
      </div>
    
  </div>
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
  mounted:{
    scrollTop(){ 
          document.body.scrollTop=0;
    }
  //     scrollTop(){ 
  //       let c = document.documentElement.scrollTop || document.body.scrollTop;
  //       if (c > 0) {
  //         window.requestAnimationFrame(scrollToTop);
  //         window.scrollTo(0, c - c / 8);
  //       }
  //     }
  },
  computed: {
    entries() {
      let path = this.$route.name
      // console.log(BLOGENTRIES.projects)
      // console.log(Array.from(BLOGENTRIES.projects).findIndex( p => p.id == path))
      let index = Array.from(BLOGENTRIES.projects).findIndex( p => p.id == path)
      let projects_removed = BLOGENTRIES.projects.slice()
      projects_removed.splice(index, 1)
      console.log('projects', projects_removed, BLOGENTRIES.projects)
      return projects_removed
    }
  },
  // created: {
  //       // let scrollY = document.body.style.top
  //       // document.body.style.position = '0';
  //       // document.body.style.top = '0';
  //       // window.scrollTo(0, parseInt(scrollY) * -1);
  //       scrollTop(){ 
  //         document.body.scrollTop=0;
  //       // let c = document.documentElement.scrollTop || document.body.scrollTop;
  //       // if (c > 0) {
  //       //   window.requestAnimationFrame(scrollToTop);
  //       //   window.scrollTo(0, c - c / 8);
  //       }
  //  }
    
        
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
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap');

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
  .none{
    display: none;
  }
  section{
    margin-bottom: 90px;

  }
    h1{
      margin-right:20px;
      margin-left:20px;
    }
    .title{
      margin-top: 20px;
    }
    h2{
      margin-right:20px;
      margin-left:20px;
    }
        
    p{
      font-weight: 400;
      font-size: 16px;
      color: rgb(4,15,25);
      letter-spacing: 0;
      line-height: 30px;
      margin-bottom: 20px;
    }
    p.center{
      text-align: center;
      margin-top: -50px;
      margin-bottom: 40px;
      color: rgba(16, 37, 56, 0.877);
      font-weight: 300;
    }
    p.right{
          text-align: right;
    }
    p.after{
          margin-bottom: 70px;
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
      .video{
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

      font-weight:500;
      font-size: 29px;
      color: rgb(4,15,25);

      margin-top: 150px; 
      margin-bottom: 20px;
      margin-right:20px;
      margin-left:20px;
    }

    h2{
      font-weight:300;
      font-size: 23px;
      color: rgb(4,15,25);
      letter-spacing: 1px;

      margin-top: 50px; 
      margin-bottom: 20px;
      margin-right:20px;
      margin-left:20px;
    }
    h3{
      margin: 0px;
      
      font-weight: 300;
      font-size: 20px;
      color: #132aff;

      margin-top: 50px; 
      margin-bottom: 20px;
      margin-right:20px;
      margin-left:20px;
      text-transform: lowercase;
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
      color: #5162ff;
      box-shadow: inset 0px -3px 0 rgb(81, 98, 255);
      
    }
    a:visited { text-decoration: none; color:rgb(81, 98, 255); }
    a:hover { text-decoration: none; color:rgb(81, 98, 255); }
    a:focus { text-decoration: none; color:rgb(81, 98, 255); }
    a:hover, a:active {
      transition: all 0.2s cubic-bezier(.65,0,.62,1.39);
      background-size: 0px 50px;
      box-shadow: inset 0px -8px 0 rgba(81, 98, 255, 0.349); 

    }
    blockquote {
      margin-top:90px;
      margin-bottom:10px;
      padding-left: 1em;
      border-left: 4px solid #040f19;
      margin-right:50px;
      margin-left:50px;
      
    }
    blockquote:before {
      display: none;
    }

    blockquote p {
      color: rgb(4,15,25);
      line-height: 2;
      font-size: 18px;
      margin:0;
    }
    /* Wave */

    hr {
      margin-top: 70px;
      margin-bottom: 70px;
      margin-left: 7%;
      width: 86%;
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
      .overview{

        
        .first{
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
            div{

            }
        }
        .second{
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
            div{
          }
        }
        .third{
        display:flex;
        justify-content: space-between;
            div{
          }
        }
      }
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
      .video{
        border-radius:10px;
        margin-top: 30px;
      }
      img.full{
        margin-top:0px;
        border-radius: 0px;
        margin-left: -15vh;
        margin-right: 15vh;
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

        
  section{
    padding-left:0vh;
    padding-right:0vh;
  }

  @media only screen and (min-width : 730px){
    section{
      padding-left:20vh;
      padding-right:10vh;
    }
    img.full{
    margin-left: -17.5vw;
    width: 69vw;
    }
    
  }
   @media only screen and (min-width : 900px){
    section{
      padding-left:20vh;
      padding-right:10vh;
    }
    img.full{
    margin-left: -11.5vw;
    width: 68vw;
    }
    
  }





  @media only screen and (min-width : 1120px){
    section{
      padding-left:15vh;
      padding-right:15vh;
      }
    img.full{
    margin-left: -11.4vw;
    width: 73vw;
    }
      
  }
  @media only screen and (min-width : 1200px){
    img.full{
    margin-left: -10.1vw;
    width: 70vw;
    }
  }
   @media only screen and (min-width : 1250px){
    img.full{
    margin-left: -9.5vw;
    width: 70vw;
    }
      
  }
    @media only screen and (min-width : 1300px){
    img.full{
    margin-left: -11.2vw;
    width: 72vw;
    }
  }

  @media only screen and (min-width : 1350px){
    section{
      padding-left:10vh;
      padding-right:15vh;
      }
    img.full{
    margin-left: -7.9vw;
    width: 73vw;
    }
  }

  @media only screen and (min-width : 1400px){
    section{
      padding-left:0vh;
      padding-right:15vw;
      }
    img.full{
      margin-left: -8vw;
      width: 76vw;
    }
    
  }

  .text .bottom .name{

    margin-bottom: 10px;
    text-transform: capitalize;
    font-weight: 500;
    padding-top: 0;
    margin:0;

  }


}
    



</style>