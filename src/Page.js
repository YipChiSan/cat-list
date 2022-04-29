import React from "react";
import GenderRow from "./GenderRow";
import PetRow from "./PetRow";

export class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getCatList = this.getCatList.bind(this);
        this.handleCatList = this.handleCatList.bind(this);
    }

    /*
     * Fetch data from URL
     */
    getCatList() {
        const baseUrl = "http://agl-developer-test.azurewebsites.net";
        let url = baseUrl + "/people.json";
        return fetch(url)
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState(this.handleCatList(jsonResponse));
            })
    }

    /*
     * Change the data format to display 
     */
    handleCatList(data) {
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

    componentDidMount() {
        this.getCatList();
    }

    render() {
        const rows = [];
        let id = 0;
        for (const gender in this.state) {
            rows.push(
                <GenderRow
                    gender={gender} key={(++id).toString()}
                />
            );

            rows.push(
                <PetRow pets={this.state[gender]} />
            );
        }
        return (
            <div>
                {rows}
            </div>
            );
    }
}

export default Page;
