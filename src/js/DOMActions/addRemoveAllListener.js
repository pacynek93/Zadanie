import { removeAllProperties } from '../API';

const addRemoveAllListener = () => {
    const removeAllButton = document.querySelector('#removeAll');
    removeAllButton.addEventListener('click', () => {
        removeAllProperties();
    });
};

export default addRemoveAllListener;
