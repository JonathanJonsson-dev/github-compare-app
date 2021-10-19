const baseUrl = 'https://api.github.com'


export default class Model {
    constructor(){
        console.log('model created')
    }

    async getGithubUser(username){
        const response = await fetch('https://api.github.com/users/JonathanJonsson-dev') //'${baseUrl}/users/${username}'
        const user = await response.json()
        console.log(response.headers.get('x-ratelimit-remaining'))
        console.log(user)
        return user
    }
}