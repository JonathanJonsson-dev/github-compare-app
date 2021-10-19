const main = document.querySelector('main')
export default class View {
    constructor(){
        console.log('view created')
    }

    showUser(user){
        debugger
        main.textContent = JSON.stringify(user)
    }
}