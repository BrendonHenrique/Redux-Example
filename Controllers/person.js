const { createStore } = require('redux');
const personModel = require('../Models/person');

class personController {    
    constructor(){ 
        this.state = personModel
        this.reducer = (state = this.state, action ) => {
            const newState = state;
            if(action.type === 'add'){
                newState.age++;
            }
            if(action.type === 'sub'){
                newState.age--;
            }
            if(action.type === 'printName'){
                console.log(newState.name)
            }
            return newState; 
        };
        this.store = createStore(this.reducer)
    }
    printName(){
        this.store.dispatch({type:'printName'});
    } 
    add(){
        this.store.dispatch({type:'add'});
    }
    sub(){
        this.store.dispatch({type:'sub'});
    }
    getStore(){
        console.log(JSON.stringify(this.store.getState()))
    }
    subscribe(){
       return this.store.subscribe( () =>  JSON.stringify(this.store.getState())) 
    }
}
module.exports = personController;