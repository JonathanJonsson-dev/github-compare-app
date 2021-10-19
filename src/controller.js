const searchButton = document.querySelector('#search-button')

export default class Controller {
    constructor(model, view){
        this.model = model
        this.view = view
        console.log('controller created')
        searchButton.addEventListener('click', () => {this.search()}) // När appen startar så lyssnar den efter click och kör this.search om man klickar
    }

    async search(){
        console.log('user clicked search')
        // getUsername
        const username = 'JonathanJonsson-dev'

        try {
            // this.view.showLoadingSpinner()
            const getUser = this.model.getGithubUser(username)
            const getRepos = this.model.getUserGithubRepos(username)
            const promises = [getUser, getRepos]
            
            const [user, repos] = await Promise.all(promises)
            debugger
            this.view.addGithubUser(user, repos)
            // this.viewstopLoadinSpinner()
        } catch (error) {
            //if (error.status === 404) // this.view.showNotFoundError()
            //if (error.status >= 500) // this.view.showGithubDownErro()
        }
    }
}