<template>
  <div class="home"> 
    <div class="column is-9">
      <div  
            :class="{fetching: isFetching, 'has-error': error}">

        <div v-if="error">
            {{ error }}
        </div>

        <div v-else>
          <div v-if="isFetching">
            
            <h1 id="Casestudies">case</h1>
  
            <div class="card-wrapper">

              <div class="card">
                <div class="card-top">
                      <div class="img"> </div>
                      <div class="text">
                          <p class="metier">Product design</p>
                          <h2 class="name">hey</h2>
                          <p class='shorttext'>yo</p>
                      </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        
        
        <div v-if="!isFetching">

          <div v-for="(section, index) in Object.keys(entries)" :key="index">
            <h1 id="Casestudies">{{section}}</h1>
            
            <div class="card-wrapper">

              <div v-for="entry in entries[section]" :key="entry.id" class="card" @click="$router.push({name: entry.id})">
                <div class="card-top">
                      <div class="img"> </div>
                      <div class="text">
                          <p class="metier">Product design</p>
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
  data () {
    return {
      isFetching: true,
      error: null,
    }
  },
  computed: {
    entries() {
      return BLOGENTRIES
    },
    isDataLoaded () {
      return BLOGENTRIES
    }
  },
  
  created () {
      this.isFetching = true
      const wait = setTimeout(() => this.isFetching = false, 0.7 * 1000)
      wait(10 * 1000)
        .then(() => this.isFetching = false)
        .catch(this.isFetching = false);

  }
}
</script>

<style lang="scss">

 html,body {
  font-family: 'Open Sans', serif;
  background: #F2F6FA;
}
footer {
  background-color: #F2F6FA !important;
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

h1{
  margin-top: 20vh;
  margin-left: 10%;
  margin-bottom: 5%;
  text-align: left

}


    .card {
        background-color: #797979;
        transition: all 0.3s cubic-bezier(.65,0,.62,1.39);

        display: grid;
        grid-template-columns: 2fr;
        
        border-radius: 2.5vh;
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
                background-image: url('../assets/proj1/cover.png');
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
                padding-left:20px;
                padding-right:50px;
            }
            .text .metier{
                font-family: 'Work Sans', sans-serif;
                font-weight: 500;
                font-size: 1rem; 
                text-transform: uppercase;
                color: rgba(255,255,255, 0.7)
            }
            .text .name{
                text-transform: capitalize;
                font-size: 3rem; 
                padding-top: 0;
                margin-top:0;
            }
            .text .shorttext{ 
                position: absolute;
                font-family: 'Work Sans', sans-serif;
                font-size: 2rem; 
                top: 110px;
                width: 480px;
            }
        }
        
    }
    @media only screen and (min-width : 730px){

    h1{
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
                    background-image: url('../assets/proj1/cover.png');
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
                    background-image: url('../assets/proj1/cover.png');
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
                    background-image: url('../assets/proj1/cover.png');
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
                    background-image: url('../assets/proj1/cover.png');
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
                    font-weight: 500;
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