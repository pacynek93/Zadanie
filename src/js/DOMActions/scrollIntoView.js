const scrollListIntoView = () => {
    const list = document.querySelector('#propertiesList');
    list.scrollIntoView({ behavior: 'smooth' });
};

const scrollFormIntoView = () => {
    const form = document.querySelector('#formContainer');
    form.scrollIntoView({ behavior: 'smooth' });
};

export { scrollFormIntoView, scrollListIntoView };
