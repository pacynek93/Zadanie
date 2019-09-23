import API from './API';
import fillFormValues from '../DOMActions/fillFormValues';
import { closeForm, openForm } from '../DOMActions/openForm';
import showAllProperties from './showAllProperties';
import getFormValues from '../DOMActions/getFormValues';

const editPropertyWithId = (id) => {
    API.GET(`${API.ROUTES.GET}/${id}`, (response) => {
        const { data } = response.data;
        openForm();
        fillFormValues(data);
        const submitFormButton = document.querySelector('.form-buttons-container .btn-success');

        submitFormButton.addEventListener('click', () => {
            const modifiedForm = getFormValues();
            API.POST(API.ROUTES.UPDATE, { ...modifiedForm, id }, () => {
                closeForm();
                showAllProperties();
            });
        });
    });
};

export default editPropertyWithId;
