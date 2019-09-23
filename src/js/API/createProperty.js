import API from './API';
import { showLoader } from '../DOMActions';
import showAllProperties from './showAllProperties';
import { closeForm } from '../DOMActions/openForm';

const createProperty = (data) => {
    showLoader();
    API.POST(API.ROUTES.CREATE, data, () => {
        closeForm();
        showAllProperties();
    });
};

export default createProperty;
