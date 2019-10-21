<template>
    <router-link :to="'/work/' + work.id" >
      <div class="card">
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




    .card {
        background-color: #797979;
        transition: all 0.3s cubic-bezier(.65,0,.62,1.39);

        display: grid;
        grid-template-columns: 2fr;
        display: grid;
        
        border-radius: 2.5vh;
        overflow: hidden;

        width: 90vw;
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

    @media only screen and (min-width : 450px){


        

        .card {
            overflow: hidden;
            z-index: 1;
            background-color: #ffffff;
            width: 30vh;
            height: 50vh;
            
        }

    }




    




       


</style>