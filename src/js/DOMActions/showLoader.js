const showLoader = () => {
    const container = document.querySelector('#propertiesList');
    const loaderElement = document.createElement('div');
    const loaderElementContent = document.createElement('span');

    loaderElement.classList.add('spinner-border', 'd-flex', 'align-items-center', 'justify-content-center');
    loaderElementContent.classList.add('sr-only');
    loaderElementContent.innerHTML = 'Loading...';

    loaderElement.appendChild(loaderElementContent);

    container.innerHTML = '';
    container.classList.add('align-items-center');
    container.appendChild(loaderElement);
};

export default showLoader;
