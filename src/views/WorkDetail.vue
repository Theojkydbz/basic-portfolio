<template>
  <div class="projet">
        <div class="card2-wrapper2">
            <div class="card2 open2" @click="handleView($event, work)">
                <div class="card2-top">
                        <div class="img"> </div>
                        <div class="text">
                            <p class="metier">Product Design</p>
                            <h2 class="name">Smartimer Of Galaxy</h2>
                            <p class='shorttext'>Workflow and project management together in a timer</p>
                        </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum mollitia, consequuntur asperiores aliquam consequatur harum quos. Autem numquam, ipsum, error recusandae dicta sequi dolores voluptas aliquam ipsa incidunt impedit corrupti?
                </div>
                
            </div>
        </div>
    <h1> working project </h1>
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
      isFetching: false,
      error: null,
      works: works,
      work: work,
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
        document.body.style.top = '0';
        
        this.isFetching = true
        store.fetchWorkById(this.$route.params.id)
        .then(works => {
            this.isFetching = false
            let idsearch = this.$route.params.id
            this.work = works.idsearch
        })
        .catch(err => {
            this.error = err
            this.isFetching = false
        })

        store.fetchWorkById()
        .then(works =>{
        })
    },
    methods: {
        handleView(el, work){
            this.work.open = !this.work.open;
            let viewportOffset= el.target.getBoundingClientRect()
            

            if(this.work.open2){
                document.body.style.top = '-' + window.scrollY+ 'px';
                document.body.style.position = 'fixed';
                

                this.styleObject.transform = 
                    'translate('+viewportOffset.left * -1 + 'px, '+ viewportOffset.top * -1 +'px)';
                
            } else {
                this.styleObject = {
                    transform: 'translate(0px,0px)'
                }
                let scrollY = document.body.style.top
                document.body.style.position = '';
                document.body.style.top = '';
                window.scrollTo(0, parseInt(scrollY) * -1);
            }

            var delayInMilliseconds = 1000; //1 second

            setTimeout(function() {
                document.location.href=`/`
            }, delayInMilliseconds);
            
        }
    }
        
    }

</script>

<style lang="scss" scoped>
.projet{
    margin: 0
}
  
  .card2-wrapper2{
    margin-bottom: 20vh;
    margin:auto;
    max-width:1100px;


    .card2 {
        position: relative;
        border: 1px solid #ffffff;
        background-color: #efefef;
        overflow: hidden;
        cursor: pointer;
        z-index: 1;
        transition: all 0.6s cubic-bezier(.65,0,.62,1.39);
        background-color: #ffffff;
        width: 90vw;
        height: 120vw;
        
        box-shadow: 0 14px 100px -1px rgba(109, 109, 109, 0.29);
        grid-template-columns: 1fr ;
        grid-gap: 3rem;
        display: grid;
        grid-auto-rows: 500px;
        grid-gap: 2.8rem;
        border-radius: 20px;
        
    

        &.open2 {
            z-index: 100;
            border-radius: 0;
            border:0;
            width: 100vw;
            height: 180vh;
            padding-left: 0;
            padding-right: 0;

        }
        

        .card2-top, .title, .content, .img {
            pointer-events: none
        }

        .card2-top{
            position: relative;
            background-color: #ffffff;

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
                font-size: 1.4rem; 
                padding-top: 0;
                margin-top:0;
            }
            .text .shorttext{ 
                font-family: 'Work Sans', sans-serif;
                font-size: 1rem; 
                padding-top: 65%
            }
        }
    }
    .content{
        display: none;
        &.open {
            display: none;
        }

    }
}



       



</style>