import API from './API';
import { createPropertiesList, showLoader } from '../DOMActions';
import { scrollListIntoView } from '../DOMActions/scrollIntoView';

const showAllProperties = () => {
    showLoader();
    API.GET(API.ROUTES.GET_ALL, (response) => {
        createPropertiesList(response.data);
        scrollListIntoView();
    });
};

export default showAllProperties;
