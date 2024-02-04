const baseURL = process.env.REACT_APP_API

const urls = {
    products: () => '/products',
    productById: (id) => `/products/${id}`,
    searchProducts: (name) => `/products/search?q=${name}`
}

export {
    baseURL,
    urls
}