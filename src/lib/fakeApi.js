const data ={
    works: {
        '1546968934': {
            id: '1546968934',
            title: 'Smartimer of Galaxy',
            metier: 'Product design',
            shortinfo: 'Workflow and project management together in a timer',
            category: '1546969225',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam earum maiores eaque nostrum, similique error ducimus. Tempora obcaecati repellat unde quam, eius veritatis non beatae ut? Alias tenetur est dolore?', 
            createdAt: 1546969144391,
            updatedAt: 1546969144391,
            open: false
            },
        '1546968935': {
            id: '1546968935',
            title: 'EPO',
            metier: 'Product design',
            shortinfo: 'Social media who cares reality',
            category: '1546969225',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam earum maiores eaque nostrum, similique error ducimus. Tempora obcaecati repellat unde quam, eius veritatis non beatae ut? Alias tenetur est dolore?', 
            createdAt: 1546969144391,
            updatedAt: 1546969144391,
            open: false
            },
        '1546968936': {
            id: '1546968936',
            title: 'EPO',
            metier: 'Product design',
            shortinfo: 'Social media who cares reality',
            category: '1546969225',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam earum maiores eaque nostrum, similique error ducimus. Tempora obcaecati repellat unde quam, eius veritatis non beatae ut? Alias tenetur est dolore?', 
            createdAt: 1546969144391,
            updatedAt: 1546969144391,
            open: false
            },
    },
}

class FakeApi {
    canContinue () {
        const randomNumber = Math.floor(Math.random() * 10)
        if(randomNumber > 5) {
            return true
        }
        return false
    }
    get (ressource, {force = 0}) {
        return new Promise((resolve, reject) => {
            this.asyncCall(()=>{
                if (force || this.canContinue()) {
                    resolve({...data[ressource]})
                } else {
                    reject('Cannot fetch ' + ressource)
                }
            })
        })
    }      

    asyncCall(cb){
        setTimeout(cb, 500)
    }
}

export default new FakeApi()