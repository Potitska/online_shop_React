import {apiService} from "./apiService";
import {urls} from "../constants";

const productsService = {

    getAll: () => apiService.get(urls.products()),
    getProductById: (id) => apiService.get(urls.productById(id)),
    getSearchProducts: (name) => apiService.get(urls.searchProducts(name))
}

export {
    productsService
}