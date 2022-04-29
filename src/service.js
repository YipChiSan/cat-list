export const service = {
    getCatList,
};

const baseUrl = "http://agl-developer-test.azurewebsites.net";

function getCatList() {
    let url = baseUrl + "/people.json";
    fetch(url)
        .then(response => response.json())
        .then(jsonResponse => {
            return jsonResponse;
        });
}
