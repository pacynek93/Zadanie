const fillFormValues = (data) => {
    const form = document.querySelector('#formContainer form');

    form.querySelector('input#apartment').value = data.apartment;
    form.querySelector('input#city').value = data.city;
    form.querySelector('input#description').value = data.description;
    form.querySelector('input#price').value = data.price;
    form.querySelector('input#property').value = data.property;
    form.querySelector('input#street').value = data.street;
    form.querySelector('input#type').value = data.type;
};

export default fillFormValues;
