function createAnimal(species, verb, noise){
    let obj = {
        species,
        [verb]: function(){
            return noise;
        }
    }
    console.log(obj[verb]());
}

createAnimal('cat', 'bleet', 'baaa');