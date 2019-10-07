export default {
    data() {
        return {
            utilityName: 'text utility',
            creator: 'Théo Geiller'
            
        }
    },
    computed: {
        fullName () {
            return `${this.utilityName} by ${this.creator}`
        }
    },
    methods:{
        textUtility_capitalize (word) {
            if (word && typeof word === 'string'){
                return word.charAt(0).toUpperCase() + word.slice(1)
            }
        }
    }
}