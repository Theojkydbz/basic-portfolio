<template>
    <div class="home"> 
        <div class="column is-9">
            <div v-if="!isFetching">
                <section class="intro">
                    <img class="illustration" src="@/assets/Home/Illustration.svg" alt="">
                    <div class="wrapper-text">
                        <h1>Théo Geiller</h1>
                        <p>hi i'm product design student oriented on interaction, user experience and development. - PORTFOLIO IN PROGRESS</p>
                        
                    </div>
                </section>
                <div v-for="(section, index) in Object.keys(entries)" :key="index">
                    <h1 id="section">{{section}}</h1>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BLOGENTRIES from '@/statics/data/blogs.json'
// @ is an alias to /src
import Vue from 'vue'
import store from '../store.js'
// import { fetchActivities, fetchCategories, fetchUser, deleteActivityAPI } from '@/api'
import { debug } from 'util';
export default {
  name: 'App',
  computed: {
    entries() {
      return BLOGENTRIES
    }
  },
  created () {
    let scrollY = document.body.style.top
    document.body.style.position = '0';
    document.body.style.top = '0';
    window.scrollTo(0, parseInt(scrollY) * -1);
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "Manrope Medium";
  src: url("../assets/fonts/manrope-medium.woff2") format("woff2");
}
@font-face {
  font-family: "Manrope Semibold";
  src: url("../assets/fonts/manrope-semibold.woff2") format("woff2");
}
@import url('https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900&display=swap');

 html,body {
  font-family: 'Work Sans', serif;
  background: rgb(255, 255, 255);
}

.intro{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        margin-top: 15%;
        margin-left: 10%;
        margin-right: 10%;
        
    img{
        width: 80vw;
        @-webkit-keyframes AnimationName {
            0%{background-position:0% 76%}
            50%{background-position:100% 25%}
            100%{background-position:0% 76%}
        }
        @-moz-keyframes AnimationName {
            0%{background-position:0% 76%}
            50%{background-position:100% 25%}
            100%{background-position:0% 76%}
        }
        @-o-keyframes AnimationName {
            0%{background-position:0% 76%}
            50%{background-position:100% 25%}
            100%{background-position:0% 76%}
        }
        @keyframes AnimationName {
            0%{background-position:0% 76%}
            50%{background-position:100% 25%}
            100%{background-position:0% 76%}
        }
    }
    .wrapper-text{

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin-top: 70px;

        h1{
            width:300px; 
            width: 80%;
            margin:10px;
            font-weight: 500;
            font-size: 2rem;
            color: #2E3643;
            letter-spacing: 0;
            text-align: center;

        }
        p{
            text-align: center;  
            width: 80%;
            opacity: 0.7;
            line-height: 1.6;
            margin:10px;
            margin-top: 0;
            font-weight: 400;
            font-size: 1.3rem;
            color: #2E3643;
            letter-spacing: 0;
        }
        
    }
    
}

.has-error {
  border: 2px solid red;
}

.card-wrapper{

    margin:auto;
    display: grid;
    grid-gap: 40px 40px;
    grid-template-columns: 1fr ;

    padding-left: 10%;
    padding-right: 20%;
    margin-bottom: 10%;

}

h1#section{
  margin-top: 20vh;
  margin-left: 10%;
  margin-bottom: 5%;
  text-align: left;
  font-family: Manrope Medium;

}


    .card {
        background-color: #797979;
        transition: all 0.3s cubic-bezier(.65,0,.62,1.39);

        display: grid;
        grid-template-columns: 2fr;
        
        border-radius: 1.3rem;
        overflow: hidden;

        width: 80vw;
        height: 120vw;
        
        box-shadow: 0 14px 20px -1px rgba(109, 109, 109, 0.74);
       
        &:hover{
            transform:translateY(-15px);
            cursor: pointer;
            box-shadow: 0 30px 30px -1px rgba(109, 109, 109, 0.74);
        }
        

        .card-top{
            position: relative;

            .img{
                width: 100%;
                height: 100%;
                background-position: center;
                background-size: cover;
                background-image: url('../assets/smartimer/cover.png');
                background-size: auto 100%;
                background-repeat:no-repeat;
                background-position: center top;
            }
            .text{
                position: absolute;
                top:0;
            }
            .text *{
                color: white;
                text-decoration:none;
                text-align: left;
                padding-left:20px;
                padding-right:50px;
            }
            .text .metier{
                font-family: 'Work Sans', sans-serif;
                font-weight: 500;
                font-size: 1rem; 
                text-transform: uppercase;
                color: rgba(255,255,255, 0.7);
                margin-top:10%;
            }
            .text .name{
                text-transform: capitalize;
                font-size: 2rem; 
                font-weight: 600;
                padding-top: 0;
                margin-top:0;
            }
            .text .shorttext{ 
                position: absolute;
                font-family: 'Work Sans', sans-serif;
                font-weight: 400;
                font-size: 1.2rem; 
                top: 110px;
                padding-top: 200px;
            }
        }
        
    }
    @media only screen and (min-width : 730px){

    h1#section{
      margin-top: 20vh;
      margin-left: 10%;
      margin-bottom: 3%;
      text-align: left;
    }
            
    .card-wrapper{

        margin:auto;
        display: grid;
        grid-gap: 40px 40px;
        grid-template-columns: 1fr ;

        padding-left: 10%;
        padding-right: 20%;
        margin-bottom: 10%;

    }
    .intro{
        img{
        width: auto;
        }
    }

        .card {
            border-radius: 1.5rem;
            overflow: hidden;
            z-index: 1;
            background-color: #ffffff;
            width: 400px;
            height: 380px;

            .card-top{
                position: relative;

                .img{
                    width: 100%;
                    height: 100%;
                    background-position: center;
                    background-size: cover;

                    background-size: auto 100%;
                    background-repeat:no-repeat;
                    background-position: center top;
                }
                .text{
                    position: absolute;
                    top:0;
                }
                .text *{
                    color: white;
                    text-decoration:none;
                    text-align: left;
                    padding: 0;
                    margin: 15px;
                }
                .text .metier{
                    margin-top: 20px;
                    font-family: 'Work Sans', sans-serif;
                    font-weight: 500;
                    font-size: 0.9rem; 
                    text-transform: uppercase;
                    color: rgba(255,255,255, 0.7)
                }
                .text .name{
                    text-transform: capitalize;
                    font-size: 1.3rem; 
                    margin-top:0;
                }
                .text .shorttext{ 
                    position: absolute;
                    width: 370px;

                    font-family: 'Work Sans', sans-serif;
                    font-size: 1rem; 
                    padding-top: 170px;
                }
            }
        }

    }
    

@media only screen and (min-width : 900px){


            
    .card-wrapper{

        margin:auto;
        display: grid;
        grid-gap: 40px 40px;
        grid-template-columns: 1fr 1fr;

        padding-left: 10%;
        padding-right: 20%;
        margin-bottom: 10%;

    }

        .card {
            border-radius: 1.2rem;
            overflow: hidden;
            z-index: 1;
            background-color: #ffffff;
            width: 250px;
            height: 380px;

            .card-top{
                position: relative;

                .img{
                    width: 100%;
                    height: 100%;
                    background-position: center;
                    background-size: cover;

                    background-size: auto 100%;
                    background-repeat:no-repeat;
                    background-position: center top;
                }
                .text{
                    position: absolute;
                    top:0;
                }
                .text *{
                    color: white;
                    text-decoration:none;
                    text-align: left;
                    padding: 0;
                    margin: 15px;
                }
                .text .metier{
                    margin-top: 20px;
                    font-family: 'Work Sans', sans-serif;
                    font-weight: 500;
                    font-size: 0.9rem; 
                    text-transform: uppercase;
                    color: rgba(255,255,255, 0.7)
                }
                .text .name{
                    text-transform: capitalize;
                    font-size: 1.3rem; 
                    margin-top:0;
                }
                .text .shorttext{ 
                    position: absolute;
                    width: 220px;

                    font-family: 'Work Sans', sans-serif;
                    font-size: 1rem; 
                    padding-top: 150px;
                }
            }
        }

    }

    @media only screen and (min-width : 1200px){

    .intro{
        display: flex;
        flex-direction: row;
        align-content: center;
            margin-top: 15%;
            margin-left: 10%;
            margin-right: 10%;
        .wrapper-text{
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
            transform: translateX(-30px);

            h1{
                text-align: left;
                width:300px; 
                margin:10px;
                font-weight: 500;
                font-size: 50px;
                color: #2E3643;
                letter-spacing: 0;

            }
            p{
                text-align: left;
                max-width: 90%;
                opacity: 0.7;
                line-height: 1.6;
                margin:10px;
                margin-top: 0;
                font-weight: 400;
                font-size: 18px;
                color: #2E3643;
                letter-spacing: 0;
            }
        }
        
    }

        
        .card-wrapper{

            margin:auto;
            display: grid;
            grid-gap: 40px 40px;
            grid-template-columns: 1fr 1fr 1fr ;

            padding-left: 10%;
            padding-right: 20%;
            margin-bottom: 10%;

        }

        .card {

            overflow: hidden;
            z-index: 1;
            background-color: #ffffff;
            width: 210px;
            height: 340px;

            .card-top{
                position: relative;

                .img{
                    width: 100%;
                    height: 100%;
                    background-position: center;
                    background-size: cover;

                    background-size: auto 100%;
                    background-repeat:no-repeat;
                    background-position: center top;
                }
                .text{
                    position: absolute;
                    top:0;
                }
                .text *{
                    color: white;
                    text-decoration:none;
                    text-align: left;
                    padding: 0;
                    margin: 15px;
                }
                .text .metier{
                    margin-top: 20px;
                    font-family: 'Work Sans', sans-serif;
                    font-weight: 400;
                    font-size: 0.9rem; 
                    text-transform: uppercase;
                    color: rgba(255,255,255, 0.7)
                }
                .text .name{
                    text-transform: capitalize;
                    font-size: 1.3rem; 
                    margin-top:0;
                }
                .text .shorttext{ 
                    position: absolute;
                    width: 180px;

                    font-family: 'Work Sans', sans-serif;
                    font-size: 0.9rem; 
                    padding-top: 150px;
                }
            }
        }

    }



    @media only screen and (min-width : 1440px){


        

        .card {
            overflow: hidden;
            z-index: 1;
            background-color: #ffffff;
            width: 260px;
            height: 400px;
            
        
            .card-top{
                position: relative;

                .img{
                    width: 100%;
                    height: 100%;
                    background-position: center;
                    background-size: cover;

                    background-size: auto 100%;
                    background-repeat:no-repeat;
                    background-position: center top;
                }
                .text{
                    position: absolute;
                    top:0;
                }
                .text *{
                    color: white;
                    text-decoration:none;
                    text-align: left;
                }
                .text .metier{
                    font-family: 'Work Sans', sans-serif;
                    font-weight: 400;
                    font-size: 1rem; 
                    text-transform: uppercase;
                    color: rgba(255,255,255, 0.7)
                }
                .text .name{
                    text-transform: capitalize;
                    font-size: 1.4rem; 
                    padding-top: 0;
                    margin-top:0;
                }
                .text .shorttext{ 
                    position: absolute;
                    width: 230px;

                    font-family: 'Work Sans', sans-serif;
                    font-size: 1rem; 
                    padding-top: 170px;
                }
            }
        }
    }



    






</style>