import Product from '../model/productSchema.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    }catch (error) {
        console.log("error getting the products" , error.message  )
    }
}
export const getProductById = async (request, response) => {
    try {
        console.log('Hie')
        const product = await Product.findOne({ 'id': request.params.id });
        response.json(product);
    }catch (error) {
        console.log("error getting the products in cart " , error.message  )
    }
}