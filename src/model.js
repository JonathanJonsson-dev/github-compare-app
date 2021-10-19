const baseUrl = 'https://api.github.com'


export default class Model {
    constructor(){
        console.log('model created')
    }

    async getGithubUser(username){
        const response = await fetch('${baseUrl}/users/${username}')
        
        console.log(response)
    }
}