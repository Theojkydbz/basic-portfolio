import fakeApi from '@/lib/fakeApi'
import Vue from 'vue'

const store = {
    state:{
        works: {}
    },
    
    fetchWorks () { 
        return fakeApi.get('works', {force: 1})
            .then( works => {
                const keys = Object.keys(works)
                Object.keys(works).forEach((key) => {
                    this.setItem('works', key, works)
                })

                return works
            })
    },
    fetchWorkById (id) {
        
        return fakeApi.get('works',{force: 1})
        .then( works => {
            const keys = Object.keys(works)
            Object.keys(works).forEach((key) => {
                this.setItem('works', key, works)
            })

            return works
        })
    },
        
    
    fetchUser () {
        return {
            name: 'Théo Geiller',
            id: '-Aj34jknvncx98812'
        }
    },
    setItem (ressource, id, item) {
        Vue.set(this.state[ressource], id, item[id])
    }
}

export default store