import { createProperty } from '../API';
import { openForm } from './openForm';

const addNewPropertyListener = () => {
    const addNewButton = document.querySelector('#addNew');
    addNewButton.addEventListener('click', () => {
        openForm(createProperty);
    });
};

export default addNewPropertyListener;
