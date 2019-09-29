const personController =  require('./Controllers/person')
const person = new personController();
// After controller has created you can use all that reducers implemented as methods.
console.log(person.subscribe())
