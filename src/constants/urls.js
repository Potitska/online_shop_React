const baseURL = process.env.REACT_APP_API

const urls = {
    products: () => '/products',
    productById: (id) => `/products/${id}`
}

export {
    baseURL,
    urls
}