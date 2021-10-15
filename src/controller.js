const searchButton = document.querySelector('#search-button')

export default class Controller {
    constructor(model, view){
        this.model = model
        this.view = view
        console.log('controller created')
        searchButton.addEventListener('click', this.search) // När appen startar så lyssnar den efter click och kör this.search om man klickar
    }

    search(){
        console.log('user clicked search')
    }
}