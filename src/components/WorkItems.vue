<template>
  <div class="card-wrapper">
      <div class="card" @click="handleView($event, work)"
        :class="{'open': work.open}"
        :style="styleObject">
                
             <div class="closer"
                :class="{'open': work.open}"
                @click="handleView($event, work)">   
                <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="iPhone-SE-Copy" transform="translate(-290.000000, -582.000000)">
                            <rect id="Rectangle" fill-opacity="0.709154212" fill="#DEDFE1" x="290" y="582" width="30" height="30" rx="15"></rect>
                            <path d="M307.011642,597.004945 L310.715798,592.714092 C311.10792,592.321969 311.10792,591.686214 310.715798,591.294092 C310.323676,590.901969 309.68792,590.901969 309.295798,591.294092 L305.005798,595.004092 L300.715798,591.294092 C300.323676,590.901969 299.687921,590.901969 299.295798,591.294092 C298.903676,591.686214 298.903676,592.321969 299.295798,592.714092 L303.006582,597.004945 L299.295798,601.294092 C299.106486,601.481858 299,601.737454 299,602.004092 C299,602.270729 299.106486,602.526325 299.295798,602.714092 C299.483565,602.903404 299.739161,603.00989 300.005798,603.00989 C300.272436,603.00989 300.528032,602.903404 300.715798,602.714092 L305.005798,599.03925 L309.295798,602.714092 C309.483565,602.903404 309.739161,603.00989 310.005798,603.00989 C310.272436,603.00989 310.528032,602.903404 310.715798,602.714092 C310.905111,602.526325 311.011597,602.270729 311.011597,602.004092 C311.011597,601.737454 310.905111,601.481858 310.715798,601.294092 L307.011642,597.004945 Z" id="Path" fill="#2F3542"></path>
                        </g>
                    </g>
                </svg>
            </div> 

          <div class="card-top">
                <div class="img"> </div>
                <div class="text">
                    <p class="metier">{{work.metier}}</p>
                    <h2 class="name">{{work.title}}</h2>
                    <p class='shorttext'>{{work.shortinfo}}</p>
                </div>
          </div>
          
          <div class="content"
                :class="{'open': work.open}">
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
          
      </div>

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
        handleView(el, work){
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

            let scrollY = document.body.style.top
            document.body.style.position = '';

            
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
        margin-top:60px;
        margin-bottom:60px;
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
            height: 100%;
            overflow-y: scroll;
            padding-left: 0;
            padding-right: 0;
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
        display: none;
        
            &.open {
                display: block;
            }
            img{
                margin: 0;
                width: 80vw;
            }
        }
        .closer{
        display: none;
        position: absolute;
        
            &.open {
                display: block;
                position: absolute;
                right: 4vh;
                top: 4vh;
                z-index: 1;
            }
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