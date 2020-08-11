<template>
    <div class="home"> 
        <div class="column is-9">
            <div v-if="!isFetching">
                <div class="head">
                    <p class="headmob">Théo Geiller</p>
                    <a class="resume link" target="_blank" href="https://drive.google.com/file/d/1LTsx-hW_DO24EvaZz7G2Op_3y1749S2P/view?usp=sharing">Resume</a>
                </div>        
                <section class="intro">
                        
                    <div class="wrapper-text">
                        <h1>Hi everyone! I’m Théo. 👨‍💻</h1>
                        <p>I love 🔬 understand and 🚀 team projects.</p>
                        <p>Adaptive product design student <a target="_blank" class="link" href="https://www.lecolededesign.com/">@lecolededesign</a> with attention on habits, feelings and crafting the futur of technology.</p>
                        <div class="annonce">
                            <p class="annoncetext">I am looking for a remote or face-to-face internship experience from now to January 2021 inclusive. </p>
                        </div>
                    </div>

                    
                <SocialMob class="social" />
                </section>
                <div v-for="(section, index) in Object.keys(entries)" :key="index">
                    <h1 id="section">{{section}}</h1>
                    <div class="card-wrapper">
                        <div v-for="entry in entries[section]" :key="entry.id" class="card" @click="$router.push({name: entry.id})">
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
                </div>
                <h1 id="section">about me</h1>
                <div class="aboutcard-wrappermob">
                    <iframe class="aboutimg" width="560" height="315" src="https://www.youtube.com/embed/1RxyjlMwAcI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    <div class="line">
                        <img src="/img/coding.95efa374.jpg"/>
                        <img src="/img/skate.0aa4ea48.jpg"/>
                        
                    </div>
                    <img src="/img/read.f3fc6bd8.jpg"/>
                    <img src="/img/event.9a0315eb.jpg"/>
                    <img src="/img/learn.d8a2a942.jpg"/>
                </div>

                <div class="aboutcard-wrapper">
                    <div class="aboutcard-read">
                        <div class="aboutcard-top">
                            <iframe class="aboutimg" width="560" height="315" src="https://www.youtube.com/embed/1RxyjlMwAcI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="aboutcard">
                        <div class="aboutcard-top">
                            <div class="aboutimg" style="background-image:url(/img/skate.0aa4ea48.jpg);"> </div>
                            <div class="text">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aboutcard-wrapper">
                    <div class="aboutcard">
                        <div class="aboutcard-top">
                            <div class="aboutimg" style="background-image:url(/img/coding.95efa374.jpg);"> </div>
                            <div class="text">
                            </div>
                        </div>
                    </div>
                    <div class="aboutcard-read">
                        <div class="aboutcard-top">
                            <div class="aboutimg" style="background-image:url(/img/read.f3fc6bd8.jpg);"> </div>
                            <div class="text">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aboutcard-wrapper">
                    <div class="aboutcard-read">
                        <div class="aboutcard-top">
                            <div class="aboutimg" style="background-image:url(/img/event.9a0315eb.jpg);"> </div>
                            <div class="text"> </div>
                        </div>
                    </div>
                    <div class="aboutcard">
                        <div class="aboutcard-top">
                            <div class="aboutimg" style="background-image:url(/img/learn.d8a2a942.jpg);"> </div>
                            <div class="text">
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div class="footer intro">    
                    <div class="info">
                        <p class="textu">Théo Geiller</p>
                        <p class="textu">L'École de design Nantes Atlantique</p>
                        <p class="textu">Master 1 - Studio Montreal</p>
                        <p class="textu">-</p>
                        <p class="textu">Don't be a stranger, don't hesitate to <a target="_blank" class="link" href="mailto:t.geiller@lecolededesign.com"> contact me </a> .</p>
                    </div>
                    <SocialMob class="social" />
                    <div class="bottom">
                        <p class="textu">Made with <img class="iconfoot" width="30px" height="20px" src="../assets/UI/vue.png"> and <img class="iconfootcof" width="40px" height="25px" src="../assets/UI/coffee.png"></p>

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

import Social from '@/components/Social'
import SocialMob from '@/components/SocialMob'
export default {
  name: 'App',
  computed: {
    entries() {
      return BLOGENTRIES
    }
  },
  components:{
    Social,
    SocialMob
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
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap');

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
  font-family: 'Jost', serif;
  background: rgb(255, 255, 255);
    overflow-x: hidden; //horizontal
    overflow-y: scroll; //vertical
}
div.head{
    
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    padding:15px;
    padding-top:25px;
    padding-right:25px;
    align-items:center;
    .headmob{
        font-weight: 400;
        font-size: 1.6rem;
    }
    .resume{
        font-weight: 400;
        font-size: 1rem;
    }
}
.link{
    color: #5162ff;
}
.iconfoot{
    margin-top:2px;
    padding:3px;
}
.iconfootcof{
    padding:3px;
}

div.footer{
    display:flex;
    justify-content: space-between;
    margin-bottom:10vh;
    flex-direction:column;
    margin-top:8vh;
    align-items:flex-end;
    .info{
        .intro{
            margin-top:10px;
            width:100%
        }
    }
    .bottom{
        align-items: left;
        text-align: left;
        .intro{
            margin-top:0;
            margin-right:3vw;
            width:100%;
        }
        .textu{
            margin-top: 30px;
            display:flex;
            content-align:center;

            .iconfoot{
                width: auto;
            }
            .iconfootcof{
                width: auto;
            }
        }
    }
}
.aboutcard-wrapper{
    display:none;
}
.aboutcard-wrappermob{
    display:flex;
    flex-direction:column;

    width:100%;
    height:100%;
    iframe{
        width:100%;
    }
    img{
        width:100%;
    }
    .line{
        display:flex;
        flex-direction:row;   
        *{
            width:50%
        }
    }
}
@media only screen and (min-width : 730px){

    .aboutcard-wrappermob{
        display:none;
    }
    div.footer{
    flex-direction:row;
        .info{
            .intro{
            }
        }
        .bottom{
            align-items: right;
            text-align:right;
            
        }
    }
}

.intro{
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
        margin-top: 10vh;
        margin-left: 16px;
        margin-right: 16px;
        
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
        align-items: left;
        justify-content: left;

        margin: 0px;
        padding: 0px;

        h1{
            width:300px; 
            width: 100%;
            margin-bottom:30px;
            font-weight: 500;
            font-size: 2rem;
            color: black;
            letter-spacing: 0;
            text-align: left;

        }
        p{
            text-align: left;  
            width: 100%;
            line-height: 1.6;
            font-weight: 400;
            font-size: 1.3rem;
            color: black;
            letter-spacing: 0;
        }

        .annonce{
            margin-top:3%;
            
            .annoncetext{
                font-weight: 300;
            }
        }

    }
    
    a.resume{
            
        margin-right:300px;
        margin-top:20px;
        text-align: left;
        font-family: 'Jost', sans-serif;
        font-size: 14pt;
        color: rgb(81,98,255);
        padding:0;
        padding-bottom:4px;
        transition: all 0.9s cubic-bezier(0,0,0,1.39);
    }

    .social{
        position: relative;
        bottom:0;
        margin-top: 30px;
        svg{
            margin-right:5px;
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

    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 10%;

}


h1#section{
  margin-top: 10vh;
  margin-left: 16px;
  margin-bottom: 5%;
  text-align: left;
  font-family: 'Jost', sans-serif;
  font-weight: 500;

}


    .card {
        transition: all 0.3s cubic-bezier(.65,0,.62,1.39);

        display: grid;
        grid-template-columns: 2fr;
        
        overflow: hidden;

        height: 120vw;
        
        background: #FFFFFF;
        border: 1px solid rgba(42,70,112,0.10);
        box-shadow: 2px 8px 16px 0 rgba(24,50,115,0.06);
        border-radius: 1rem;

        
       
        &:hover{
            transform:translateY(-5px);
            cursor: pointer;
            box-shadow: 0 30px 30px -1px rgba(24,50,115,0.06);
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
            .text *{
                color: #040f19;
                text-decoration:none;
            }
            .text .metier{
                margin: 15px;
                position: absolute;
                top:-10px;

                font-family: 'Jost', sans-serif;
                font-weight: 500;
                font-size: 1rem; 
                text-transform: uppercase;
                color: rgba(0,0,0, 0.7);
                margin-top:10%;
            }
            .text .bottom{
                position: absolute;
                bottom: 0%;
                margin:15px;

                width: 90%;
                display:flex;
                flex-direction: column;
            }
            .text .name{

                margin-bottom: 5px;
                text-transform: capitalize;
                font-size: 2rem; 
                font-weight: 500;
                padding-top: 0;
                margin-top:0;
            }
            .text .shorttext{ 

                margin-top: 0px;
                color:#040f19b0;
                font-family: 'Jost', sans-serif;
                font-weight: 400;
                font-size: 1.2rem; 
                width: 100%;
            }
        }
        
    }




    
    @media only screen and (min-width : 730px){

.aboutcard-wrapper{

    margin:auto;
    display: grid;
    grid-gap: 40px 40px;
    grid-template-columns: 1fr ;

    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 40px;
    
    .aboutcard{

        display: grid;
        grid-template-columns: 2fr;
        
        overflow: hidden;

        height: 120vw;
        
        border: 1px solid #EDEEF2;
        box-shadow: inset 2px 8px 16px 0 rgba(24,50,115,0.06);
        border-radius: 12px;

    }
    .aboutcard-read{

        display: grid;
        grid-template-columns: 2fr;
        overflow: hidden;

        height: 120vw;
        
        border: 1px solid #EDEEF2;
        box-shadow: inset 2px 8px 16px 0 rgba(24,50,115,0.06);
        border-radius: 12px;
    }
    .aboutcard-top{

            position: relative;

            .aboutimg{
                width: 100%;
                height: 100%;
                background-position: center;
                background-size: cover;
                background-image: url('../assets/smartimer/cover.png');
                background-size: auto 100%;
                background-repeat:no-repeat;
                background-position: center top;
            }
    }    
}

        a.resume{
            display:none;
        }
        .social{
            display:none;
        }
        p.headmob{
            display:none;
        }
        

    h1#section{
      margin-top: 10vh;
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
        
        margin-right:30px;
        margin-left:10%;
        img{
        width: auto;
        }
        .illustration{
            width:50%
        }
    }

        .card {
            
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
                
                .text *{
                    color: #040f19;;
                    text-decoration:none;
                    text-align: left;
                    padding: 0;
                }
                .text .metier{
                    font-family: 'Jost', sans-serif;
                    font-weight: 500;
                    font-size: 0.9rem; 
                    text-transform: uppercase;
                    color: rgba(0,0,0, 0.7)
                }
                .text .name{
                    margin-bottom: 5px;
                    text-transform: capitalize;
                    font-size: 1.3rem; 
                    margin-top:0;
                }
                .text .shorttext{ 
                    margin-top: 0px;
                    width: 370px;

                    font-family: 'Jost', sans-serif;
                    font-size: 1rem; 
                }
            }
        }
        .aboutcard-wrapper{

        margin:auto;
        display: grid;
        grid-gap: 40px 40px;
        grid-template-columns: 1fr ;

        padding-left: 10%;
        padding-right: 20%;
        margin-bottom: 40px;

            .aboutcard {
                
                overflow: hidden;
                z-index: 1;
                background-color: #ffffff;
                width: 400px;
                height: 380px;

            }
        }
    }
    

@media only screen and (min-width : 900px){
    section.intro{
        margin-top: 15vw;
    }

            
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
            border-radius: 0.9rem;
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
                
                .text *{
                    color: #040f19;
                    text-decoration:none;
                    text-align: left;
                    padding: 0;
                }
                .text .metier{
                    
                    font-family: 'Jost', sans-serif;
                    font-weight: 500;
                    font-size: 0.9rem; 
                    text-transform: uppercase;
                    color: rgba(0,0,0, 0.7)
                }
                .text .name{
                    margin-bottom: 5px;
                    text-transform: capitalize;
                    font-size: 1.3rem; 
                    margin-top:0;
                }
                .text .shorttext{ 
                    margin-top: 0px;
                    width: 220px;

                    font-family: 'Jost', sans-serif;
                    font-size: 1rem; 
                }
            }
        }
        .aboutcard-wrapper{

        margin:auto;
        display: grid;
        grid-gap: 40px 40px;
        grid-template-columns: 1fr;

        padding-left: 10%;
        padding-right: 20%;
        margin-bottom: 40px;

            .aboutcard {

                border-radius: 0.9rem;
                overflow: hidden;
                z-index: 1;
                background-color: #ffffff;
                width: 250px;
                height: 380px;

            }
            .aboutcard-read {

                border-radius: 0.9rem;
                overflow: hidden;
                z-index: 1;
                background-color: #ffffff;
                width: 540px;
                height: 380px;

            }

        }
    }

    @media only screen and (min-width : 1200px){

    .intro{
        display: flex;
        flex-direction: row;
        align-content: center;
            margin-top: 10vw;
            margin-left: 10%;
            margin-right: 10%;
        .illustration{
            position:relative;
            width:80%;
            margin-left:0;
            opacity:1;
            top:0;
            display:block;
        }
        .wrapper-text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;

            h1{
                text-align: left;
                font-weight: 500;
                font-size: 50px;
                color: rgb(4,15,25);
                letter-spacing: 0;

            }
            p{
                text-align: left;
                max-width: 90%;
                line-height: 1.6;
                font-weight: 400;
                font-size: 18px;
                color: rgb(4,15,25);
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
                
                .text *{
                    color: #040f19;
                    text-decoration:none;
                    text-align: left;
                    padding: 0;
                }
                .text .metier{
                    
                    font-family: 'Jost', sans-serif;
                    font-weight: 400;
                    font-size: 0.9rem; 
                    text-transform: uppercase;
                    color: rgba(0,0,0, 0.7)
                }
                .text .name{
                    margin-bottom: 5px;
                    text-transform: capitalize;
                    font-size: 1.3rem; 
                    margin-top:0;
                }
                .text .shorttext{ 
                    margin-top: 0px;
                    width: 180px;

                    font-family: 'Jost', sans-serif;
                    font-size: 0.9rem; 
                }
            }
        }

        .aboutcard-wrapper{

            margin:auto;
            display: grid;
            grid-gap: 40px 40px;
            grid-template-columns: 1fr 1fr ;

            padding-left: 10%;
            padding-right: 20%;
            margin-bottom: 40px; 
            .aboutcard{
                overflow: hidden;
                z-index: 1;
                background-color: #ffffff;
                width: 210px;
                height: 340px;

            }
            .aboutcard-read{
                overflow: hidden;
                z-index: 1;
                background-color: #ffffff;
                width: 460px;
                height: 340px;

            }

        }
        

    }



    @media only screen and (min-width : 1440px){
        
    h1#section{
      margin-left: 0%;
    }
    .card-wrapper{
        padding-left: 0%;
    }
    .intro{
        margin-left:0%;
    }

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
                
                .text *{
                    color: #040f19;;
                    text-decoration:none;
                    text-align: left;
                }
                .text .metier{
                    font-family: 'Jost', sans-serif;
                    font-weight: 400;
                    font-size: 1rem; 
                    text-transform: uppercase;
                    color: rgba(0,0,0, 0.7)
                }


                .text .name{
                    margin-bottom: 5px;
                    text-transform: capitalize;
                    font-size: 1.4rem; 
                    padding-top: 0;
                    margin-top:0;
                }
                .text .shorttext{ 
                    margin-top: 0px;
                    width: 230px;

                    font-family: 'Jost', sans-serif;
                    font-size: 1rem; 
                }
            }
        }

        .aboutcard-wrapper{
            padding-left: 0%;
            .aboutcard {
                overflow: hidden;
                background-color: #ffffff;
                width: 260px;
                height: 400px;
                
            }
            .aboutcard-read {
                overflow: hidden;
                background-color: #ffffff;
                width: 560px;
                height: 400px;
                
            }
        }
        .footer{
            margin-left: 0%;
            width: 857px;
        }
    }



    






</style>