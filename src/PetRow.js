import React from 'react';

function PetRow(props) {
    const pets = props.pets;
    return (
        <ul>
            {pets.map(pet => <li>{pet}</li>)}
        </ul>
        );
}

export default PetRow;
