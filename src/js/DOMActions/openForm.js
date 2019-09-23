import getFormValues from './getFormValues';
import { scrollFormIntoView, scrollListIntoView } from './scrollIntoView';

const closeForm = () => {
    const form = document.querySelector('#formContainer');
    form.classList.add('hidden');
    scrollListIntoView();
};

const openForm = (action) => {
    const form = document.querySelector('#formContainer');
    form.classList.remove('hidden');
    const formInner = form.querySelector('form');

    const buttonsContainer = document.querySelector('.form-buttons-container');
    buttonsContainer.innerHTML = '';

    const cancelButton = document.createElement('button');
    const submitButton = document.createElement('button');

    cancelButton.classList.add('btn', 'btn-danger', 'mx-2');
    submitButton.classList.add('btn', 'btn-success', 'mx-2');

    cancelButton.innerHTML = 'Cancel';
    submitButton.innerHTML = 'Submit';

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        closeForm();
        formInner.removeChild(cancelButton);
        formInner.removeChild(submitButton);
    });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const formData = getFormValues();
        if (action) action(formData);
    });

    buttonsContainer.appendChild(cancelButton);
    buttonsContainer.appendChild(submitButton);

    formInner.appendChild(buttonsContainer);

    scrollFormIntoView();
};

export { openForm, closeForm };
