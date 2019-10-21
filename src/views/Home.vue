<template>
  <div class="home"> 
    <div class="column is-9">
      <div  class="box content" 
            :class="{fetching: isFetching, 'has-error': error}">
        <div v-if="error">
            {{ error }}
        </div>
        <div v-else>
          <div v-if="isFetching">
              loading
          </div>
          <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
            <h2 class="center">{{section}}</h2>
            <div class="section" v-for="entry in entries[section]" :key="entry.id">
              <div class="entry">
                <h3 @click="$router.push({name: entry.id})">
                  {{entry.title}}
                  <span class="subtitle">{{entry.date}}</span>
                </h3>
                <p>{{entry.description}}</p>
              </div>
            </div>
          </div>
          <!-- <h1 id="Casestudies">Project & Case studies</h1>
          <div class="card-wrapper">
            <WorkItems   />
          </div>
          <h1 id="Experiments">Experiments</h1>
          <div class="card-wrapper">
            <WorkItems   />
          </div> -->
        </div>
        <div v-if="!isFetching">
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

import WorkItems from '@/components/WorkItems'
// import { fetchActivities, fetchCategories, fetchUser, deleteActivityAPI } from '@/api'
import { debug } from 'util';

export default {
  name: 'App',
  components: { 
    WorkItems, 
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
    entries() {
      return BLOGENTRIES
    },
    isDataLoaded () {
      return this.works && this.works
    }
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

.card-wrapper{

    margin:auto;
    display: grid;
    grid-gap: 40px 40px;
    grid-template-columns: 1fr 1fr 1fr ;

    padding-left: 10%;
    padding-right: 300px;

    margin-bottom: 10vh
}

h1{
  margin-top: 25vh;
  margin-left: 5vw;
  margin-bottom: 10vh;
  text-align: left

}
</style>