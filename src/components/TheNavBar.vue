<template>
  <div class="nav">
    
    <div class="head">
      <div class="wrap">
        <div class="line">
            <router-link to='/' id="section">
                            <h1>Théo Geiller</h1>
            </router-link>
        </div>
        <div class="line">
          <p class="role">inquisitive designer</p>
        </div>
        <div class="line">
              <a target="_blank" href="https://drive.google.com/file/d/1Ish2SKD6pgat8lB32qMCw34immkAtzxx/view?usp=sharing">Resume</a>
        </div>

        <div class="line">
          <div class="liner">
              <ul class="routernav" v-if="!Showrouter">
                  <li>
                        <router-link to='/' id="section">
                            Home
                        </router-link>
                  </li>
              </ul>
          </div>
        </div>
<!-- <div class="liner">
          <ul class="routernav" v-if="!Showrouter">
            <div v-for="(section, index) in Object.keys(entries)" :key="index">
                    <li>
                      <router-link to='/' id="section">
                        {{section}}
                      </router-link>
                    </li>
                    <li>
                        <div v-for="entry in entries[section]" :key="entry.id" @click="$router.push({name: entry.id})">
                          <div class="line">
                            <a href="">{{entry.title}}</a>
                          </div>
                        </div>
                        </li>
                    
            </div>
          
        </ul>

</div> -->
        
          <Social class="social" />
      </div>
    </div>
  </div>
</template>

<script>
import Social from '@/components/Social'
import BLOGENTRIES from '@/statics/data/blogs.json'

export default {
   computed: {
    entries() {
      return BLOGENTRIES
    }
  },
  data(){
    return {

      Showrouter: true,
      // Previous:'/work/',
      // Next:'/work/',
      // ableToPrev:true,
      // ableToNext:true,

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
      // var id = parseInt(this.$route.params.id)
      // this.Next = '/work/' + (id + 1)
      // this.Previous = '/work/' + (id - 1)

      // if(id == '1546968934'){this.ableToPrev=false}else{this.ableToPrev=true}
      // if(id == '1546968939'){this.ableToNext=false}else{this.ableToNext=true}
      // console.log('next:'+this.Next+'previous:'+this.Previous)
    }
  }

}
</script>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900&display=swap');

.social{
  display: inline-block;
}

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
}
h1{

  font-family: 'Jost';
  font-weight: 500;
  font-size: 24px;
  color: black;
  letter-spacing: 0;
  font-size: 140%;
}
.separateur{
  display: none;
  font-family: 'Jost', sans-serif;
  font-weight: 300;
  font-size: 140%;
  color: rgba(139,160,233,0.45);
}
.role{
  font-family: 'Jost', sans-serif;
  font-weight: 300;
  font-size: 140%;
  color:#040f19;
}
.devise{
  font-family: 'Jost', sans-serif;
  font-weight: 300;
  font-size: 130%;
  color: #040f19;
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
    width: 35vw;
    background-image: url("../assets/UI/navback.jpg");
    background-size: cover;
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

  h1{
    font-size: 18pt;
    color: #040f19;
  }
  
  .separateur{
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    font-size: 140%;
    display:none
  }

  .role{
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 140%;
  }

  .devise{
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 130%;
   
  }
  .liner ul{
    margin-top:20vh
  }
  .line{
    margin: 0 0 0 0;
    padding: 5px;
  }
  .line a{
    
    font-family: 'Jost', sans-serif;
    font-size: 14pt;
    color: rgb(81,98,255);
    padding:0;
    padding-bottom:4px;
    box-shadow: inset 0px -3px 0 rgb(81,98,255);
    transition: all 0.9s cubic-bezier(0,0,0,1.39);
  }
  a:link{

      text-decoration:none;

  }

  a:hover{
      transition: all 0.2s cubic-bezier(.65,0,.62,1.39);
      box-shadow: inset 0px -16px 0 rgba(81,98,255, 0.349);
  }
  
  ul{

    display: block;
    margin:0;
    padding:0;

    li{

      display: block;
      margin:0;
      padding: 0;
      margin-top: 2vh;
      margin-left: 0vh;

      a{
        padding:0;
        padding-bottom:3px;
        box-shadow: inset 0px -3px 0 rgb(81,98,255);
        transition: all 0.9s cubic-bezier(0,0,0,1.39);
      }
      a:link{

          text-decoration:none;

      }

      a:hover{
          transition: all 0.2s cubic-bezier(.65,0,.62,1.39);
          box-shadow: inset 0px -16px 0 rgba(81,98,255, 0.349);
      }
      
      *{
        font-family: 'Jost', sans-serif;
        font-size: 14pt;
        color:rgb(81,98,255);

      }
    }
  }
}
@media only screen and (min-width : 1120px){
  .nav{
    width: 30vw;
    
  }
}
@media only screen and (min-width : 1300px){
  .nav{
    width: 28vw;
    
  }
}
@media only screen and (min-width : 1400px){
  .nav{
    width: 22vw;
    
  }
}



</style>