import API from './API';
import { showLoader } from '../DOMActions';
import showAllProperties from './showAllProperties';

const removePropertyWithId = (id) => {
    showLoader();
    API.POST(`${API.ROUTES.DELETE}/${id}`, {}, () => {
        showAllProperties();
    });
};

export default removePropertyWithId;
