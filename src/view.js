const main = document.querySelector('main')
export default class View {
    constructor(){
        console.log('view created')
    }

    addGithubUser(user, repos){
        
        main.textContent = JSON.stringify(user) + JSON.stringify(repos)
    }
}