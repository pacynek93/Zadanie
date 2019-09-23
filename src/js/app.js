import { showAllProperties } from './API';
import { addShowAllListener, addRemoveAllListener, addNewPropertyListener } from './DOMActions';

window.addEventListener('load', () => {
    showAllProperties();
    addShowAllListener();
    addRemoveAllListener();
    addNewPropertyListener();
});
