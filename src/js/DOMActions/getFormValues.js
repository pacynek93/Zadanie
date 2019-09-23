const getFormValues = () => {
    const form = document.querySelector('#formContainer form');

    return {
        apartment: form.querySelector('input#apartment').value,
        city: form.querySelector('input#city').value,
        description: form.querySelector('input#description').value,
        price: form.querySelector('input#price').value,
        property: form.querySelector('input#property').value,
        street: form.querySelector('input#street').value,
        type: form.querySelector('input#type').value
    };
};

export default getFormValues;
