
const baseUrl = "http://agl-developer-test.azurewebsites.net";

function getCatList() {
    let url = baseUrl + "/people.json";
    fetch(url)
        .then(response => response.json())
        .then(jsonResponse => {
            return jsonResponse;
        });
}

let data = [{ "name": "Bob", "gender": "Male", "age": 23, "pets": [{ "name": "Garfield", "type": "Cat" }, { "name": "Fido", "type": "Dog" }] }, { "name": "Jennifer", "gender": "Female", "age": 18, "pets": [{ "name": "Garfield", "type": "Cat" }] }, { "name": "Steve", "gender": "Male", "age": 45, "pets": null }, { "name": "Fred", "gender": "Male", "age": 40, "pets": [{ "name": "Tom", "type": "Cat" }, { "name": "Max", "type": "Cat" }, { "name": "Sam", "type": "Dog" }, { "name": "Jim", "type": "Cat" }] }, { "name": "Samantha", "gender": "Female", "age": 40, "pets": [{ "name": "Tabby", "type": "Cat" }] }, { "name": "Alice", "gender": "Female", "age": 64, "pets": [{ "name": "Simba", "type": "Cat" }, { "name": "Nemo", "type": "Fish" }] }];

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
