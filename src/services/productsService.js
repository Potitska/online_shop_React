import {apiService} from "./apiService";
import {urls} from "../constants";

const productsService = {
    getAll: () => apiService.get(urls.products()),
    getAllProductsCategories: () => apiService.get(urls.getAllProductsCategories()),
    getProductById: (id) => apiService.get(urls.productById(id)),
    getSearchProducts: (name) => apiService.get(urls.searchProducts(name)),
    getProductsOfCategory: (name) => apiService.get(urls.getProductsOfCategory(name))

}

export {
    productsService
}