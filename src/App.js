
const baseUrl = "http://agl-developer-test.azurewebsites.net";

function getCatList() {
    let url = baseUrl + "/people.json";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

function App() {
    getCatList();
}

export default App;
