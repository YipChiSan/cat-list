import { service } from "./service.js";

function handleCatList(data) {
    let result = {};
    for (let person of data) {
       
        if (!(person.gender in result)) {
            result[person.gender] = [];
        }

        if (person.pets != null) {
            for (let pet of person.pets) {

                if (pet.type == "Cat") {
                    result[person.gender].push(pet.name);
                }
            }
        }
    }
    
    for (let gender in result) {
        result[gender].sort();
    }

    return result;
}

function App() {
    console.log(handleCatList(data));
}

export default App;
