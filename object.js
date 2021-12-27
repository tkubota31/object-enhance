//same keys and values
function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName,
    }
};

//computed property names
let favoriteNumber = 42;
const instructor = {
    firstName : "Colt",
    [favoriteNumber]: "That is my favorite!"
};


//Object Methods
const instructor = {
    firstName : "Colt",
    sayHi(){
        return "Hi!"
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

//createAnimal Function
function createAnimal (species,verb,noise){
    return {
        species,
        [verb] (){
            return noise;
        }
    }
}
