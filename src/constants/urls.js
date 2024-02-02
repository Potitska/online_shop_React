const baseURL = process.env.REACT_APP_API

const urls = {
    products: () => '/products',
    getAllProductsCategories: () => '/products/categories',
    productById: (id) => `/products/${id}`,
    searchProducts: (name) => `/products/search?q=${name}`,
    getProductsOfCategory: (name) => `/products/category/${name}`
}

export {
    baseURL,
    urls
}