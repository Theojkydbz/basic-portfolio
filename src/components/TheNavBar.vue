<template>
  <div class="nav">
    <div class="head">
      <div class="wrap">
        <div class="line">
          <h1>Théo Geiller</h1> 
          <p class="separateur">|</p> 
          <p class="role"> Product Designer</p>
        </div>
        <div class="line">
          <p class="devise"> HUMAN CENTERED INTERACTION</p>
        </div>
        <div class="line">
          <div class="routernav" v-if="Showrouter">
            
          </div>
          <Social />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Social from '@/components/Social'

export default {
  data(){
    return {

      Showrouter: false,
      Previous:'/work/1546968934',
      Next:'/work/1546968936',
      ableToPrev:true,
      ableToNext:true,

    }
  },
  components:{
    Social
  },
  watch:{
    $route (to, from){
      console.log(this.$route.params.id)
      if(this.$route.params.id){
        this.Showrouter = true;
      }else{
        this.Showrouter = false;
      }
      var id = parseInt(this.$route.params.id)
      this.Next = '/work/' + (id + 1)
      this.Previous = '/work/' + (id - 1)

      if(id == '1546968934'){this.ableToPrev=false}else{this.ableToPrev=true}
      if(id == '1546968939'){this.ableToNext=false}else{this.ableToNext=true}
      console.log('next:'+this.Next+'previous:'+this.Previous)
    }
  }

}
</script>

<style scoped lang="scss">

.head{
  margin-top: 10vh;
  margin-left: 8vh;
}
.head .wrap{
    display: block;
  }

.logo{
  height: 10vh;
  width: 10vh;
  margin-right: 0;
}
.line *{
  margin: 0 0 0 0;
  padding: 5px;
  
  
}
h1{
  font-family: Avenir-Medium;
  font-size: 140%;
  color: #2F3542;
}
.separateur{
  display: none;
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 140%;
  color: rgba(139,160,233,0.45);
}
.role{
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 140%;
  color: #747D8C;
}
.devise{
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 130%;
  color: #A4B0BE;
}





@media only screen and (min-width : 450px){
/* Styles pour cette Media Queries */

  .nav{
    position: fixed;
    margin:0;
    padding: 0;
    /* background-color: rgb(255, 255, 255); */
    height:100vh;
    top: 0;
    width: 30vw
    
  }
  .head .wrap{
    display: inline-block;
    vertical-align: text-top;
  }

  .logo{
    height: 15vh;
    width: 15vh;
    margin-right: 2vh;
  }

  .line *{
    margin: 0 0 0 0;
    padding: 5px;
    display: inline-block; 
  }

  h1{
    font-family: Avenir-Medium;
    font-size: 18pt;
    color: #2F3542;
  }
  
  .separateur{
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
    font-size: 140%;
    color: rgba(139,160,233,0.45);
    display:none
  }

  .role{
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
    font-size: 140%;
    color: #747D8C;
  }

  .devise{
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
    font-size: 130%;
    color: #A4B0BE;
   
  }
  .line ul{

    display: block;
    margin:0;
    padding: 0;
    margin-top: 20vh;

    li{

      display: block;
      margin:0;
      padding: 0;
      margin-top: 2vh;
      margin-left: 4vh;

      :link{

        text-decoration:none;

      }

      :hover{
        color: #414141;
      }

      *{
        font-family: 'Work Sans', sans-serif;
        font-size: 17pt;
        color: #747D8C;

      }
    }
  }
}


</style>