import { showAllProperties } from '../API';

const addShowAllListener = () => {
    const showAllButton = document.querySelector('#showAll');
    showAllButton.addEventListener('click', () => {
        showAllProperties();
    });
};

export default addShowAllListener;
