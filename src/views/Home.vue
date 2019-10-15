<template>
  <div class="home">
    <Header />
    <Wrapper />
    
                      
        <div class="column is-9">
          <div class="box content" 
              :class="{fetching: isFetching, 'has-error': error}">
            <div v-if="error">
              {{ error }}
            </div>
            <div v-else>
              <div v-if="isFetching">
                loading
              </div>
              <WorkItems v-for="work in works"
                      :key="work._id"
                      :work="work" />
            </div>
            <div v-if="!isFetching">
            </div>
          </div>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import store from '../store.js'

import WorkItems from '@/components/WorkItems'
import Header from '@/components/home/Header.vue'
import Wrapper from '@/components/home/Wrapper.vue'
// import { fetchActivities, fetchCategories, fetchUser, deleteActivityAPI } from '@/api'
import { debug } from 'util';

export default {
  name: 'App',
  components: { 
    WorkItems, 
    Header,
    Wrapper 
  },
  
  data () {
    const { state: {works}} = store
    return {
      isFetching: false,
      error: null,
      user: {},
      works: works,
    }
  },
  computed: {
    isDataLoaded () {
      return this.works && this.works
    }
  },
  beforeCreate () {
    console.log('beforeCreate Called!')
  },
  created () {
    this.isFetching = true
    store.fetchWorks()
      .then(works => {
        this.isFetching = false
      })
      .catch(err => {
        this.error = err
        this.isFetching = false
      })

    this.user = store.fetchUser()

    store.fetchWorks()
      .then(works =>{
    })
  }
}
</script>

<style>

 html,body {
  font-family: 'Open Sans', serif;
  background: #F2F6FA;
}
footer {
  background-color: #F2F6FA !important;
}
.fetching{
  border: 2px solid orange;
}

.has-error {
  border: 2px solid red;
}
.activity-motivation{
  float: right;
}
.activity-length{
  display: inline-block
}
 .example-wrapper {
  margin-left: 30px;
}
 .topNav {
  border-top: 5px solid #3498DB;
}
.topNav .container {
  border-bottom: 1px solid #E6EAEE;
}
.container .columns {
  margin: 3rem 0;
  text-align: left;
}
.navbar-menu .navbar-item {
  padding: 0 2rem;
}
aside.menu {
  padding-top: 3rem;
}
aside.menu .menu-list {
  line-height: 1.5;
}
aside.menu .menu-label {
  padding-left: 10px;
  font-weight: 700;
}
.button.is-primary.is-alt {
  background: #00c6ff;
  background: -webkit-linear-gradient(to bottom, #0072ff, #00c6ff);
  background: linear-gradient(to bottom, #0072ff, #00c6ff);
  font-weight: 700;
  font-size: 14px;
  height: 3rem;
  line-height: 2.8;
}
.media-left img {
  border-radius: 50%;
}
.media-content p {
  font-size: 14px;
  line-height: 2.3;
  font-weight: 700;
  color: #8F99A3;
}
article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #E6EAEE;
}
article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
.menu-list li{
  padding: 5px;
}
 .navbar-brand > h1 {
  font-size: 31px;
  padding: 20px;
}
</style>