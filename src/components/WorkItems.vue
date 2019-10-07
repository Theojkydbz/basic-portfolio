<template>
  <div class="card-wrapper">
    <router-link :to="'/work/' + work.id" >
      <div class="card" @click="handleView($event)"
        :class="{'open': work.open}"
        :style="styleObject">
          <div class="card-top">
                <div class="img"> </div>
                <div class="text">
                    <p class="metier">{{work.metier}}</p>
                    <h2 class="name">{{work.title}}</h2>
                    <p class='shorttext'>{{work.shortinfo}}</p>
                </div>
          </div>
          
          
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
    props:["work"],
    data: () => {
        return {
            styleObject: {
                transform:'translate(0px, 0px)'
            }
        };
    } ,
    methods:{
        handleView(el){
            this.work.open = !this.work.open;
            let viewportOffset= el.target.getBoundingClientRect()

            if(this.work.open){
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
        }
    }
}
</script>

<style lang="scss" scoped>
.card-wrapper{
    margin-bottom: 20vh;
    margin:auto;
    max-width:1100px;

    padding-left: 5%;
    padding-right: 5%;

    .card {
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
        margin-top:80px;
        margin-bottom:80px;
        grid-template-columns: 1fr ;
        grid-gap: 3rem;
        display: grid;
        grid-auto-rows: 500px;
        grid-gap: 2.8rem;
        border-radius: 20px;
        
    

        &.open {
            z-index: 100;
            border-radius: 0;
            border:0;
            width: 100vw;
            height: 180vh;
            padding-left: 0;
            padding-right: 0;
            overflow: scroll;
            -webkit-overflow-scrolling: touch;

        }
        

        .card-top, .title, .content, .img {
            pointer-events: none
        }

        .card-top{
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
        .content{
            padding: 20px;
        }
    }
}



       






//     .container *{
//         margin: auto;
//     }

//     .company img{
//         max-height: 50vh ;
//         text-align: center;
//         display: block;
//     }


    
//     .WorkCase{
//         margin-top: 5vh;
//     }
//     .categorie{
//         text-align: left;
//         margin-left: 5vw;
//         font-size:2rem;
//     }
</style>