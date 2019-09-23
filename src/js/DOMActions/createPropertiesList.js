import { editPropertyWithId, removePropertyWithId } from '../API';

const prepareButtons = (id) => {
    const modifyButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    modifyButton.addEventListener('click', () => {
        editPropertyWithId(id);
    });
    modifyButton.classList.add('modify-button', 'btn', 'btn-info', 'mb-2');
    deleteButton.classList.add('delete-button', 'btn', 'btn-danger');
    deleteButton.addEventListener('click', () => {
        removePropertyWithId(id);
    });

    deleteButton.innerHTML = 'Delete';
    modifyButton.innerHTML = 'Modify';

    return { modifyButton, deleteButton };
};

const createPropertiesList = (data) => {
    const propertiesListContainer = document.querySelector('#propertiesList');
    let propertiesList = [];

    propertiesList = data.data.map((property) => {
        const { modifyButton, deleteButton } = prepareButtons(property.id);
        const propertyContainer = document.createElement('div');
        const propertyHeader = document.createElement('div');
        const propertyBody = document.createElement('div');
        const propertyBodyRow = document.createElement('div');
        const propertyButtons = document.createElement('div');

        propertyContainer.setAttribute('id', property.id);
        propertyContainer.classList.add('card', 'my-2');

        propertyHeader.classList.add('card-header');
        propertyHeader.innerHTML = `<b>#${property.id}</b> - ${property.street} - ${property.city} - ${property.price}`;

        propertyBody.classList.add('card-body');
        propertyBodyRow.classList.add('row');
        propertyBody.appendChild(propertyBodyRow);

        propertyButtons.classList.add('buttons', 'col-md-2', 'd-flex', 'justify-content-end', 'align-items-end', 'flex-column');

        propertyBodyRow.innerHTML = `<div class="col-md-10">
                            <div class="row">
                              <div class="col-md-4">
                                <p class="card-text font-weight-bold">Street: </p>
                                <p class="card-text font-weight-bold">Property number: </p>
                                <p class="card-text font-weight-bold">Apartment number: </p>
                                <p class="card-text font-weight-bold">City: </p>
                                <p class="card-text font-weight-bold">Price: </p>
                                <p class="card-text font-weight-bold">Type: </p>
                                <p class="card-text font-weight-bold">Description: </p>
                              </div>
                              <div class="col-md-8">
                                <p class="card-text">${property.street}</p>
                                <p class="card-text">${property.property}</p>
                                <p class="card-text">${property.apartment}</p>
                                <p class="card-text">${property.city}</p>
                                <p class="card-text">${property.price}</p>
                                <p class="card-text">${property.type}</p>
                                <p class="card-text">${property.description}</p>
                              </div>
                              </div>
                        </div>`;

        propertyButtons.appendChild(modifyButton);
        propertyButtons.appendChild(deleteButton);
        propertyBodyRow.appendChild(propertyButtons);
        propertyContainer.appendChild(propertyHeader);
        propertyContainer.appendChild(propertyBody);

        return propertyContainer;
    });

    if (propertiesList.length > 0) {
        propertiesListContainer.innerHTML = '';
        propertiesList.map(property => propertiesListContainer.appendChild(property));
    } else {
        propertiesListContainer.innerHTML = 'No properties found.';
    }
    propertiesListContainer.classList.remove('align-items-center');
};

export default createPropertiesList;
