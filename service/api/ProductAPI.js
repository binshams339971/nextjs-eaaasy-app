import { ApiCore } from "../utilities/core";
const url = 'products';
const plural = 'products';
const single = 'product';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiProducts = new ApiCore({
    getAll: true,
    url: url,
    plural: plural,
    single: single
});

// Add custom api call logic here


export default apiProducts;