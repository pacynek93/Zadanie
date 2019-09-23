import API from './API';
import { showLoader } from '../DOMActions';
import showAllProperties from './showAllProperties';

const removeAllProperties = () => {
    showLoader();
    API.POST(API.ROUTES.DELETE_ALL, {}, () => {
        showAllProperties();
    });
};

export default removeAllProperties;
