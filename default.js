
import { products } from "./constants/product.js"
import product from "./model/productSchema.js";
const DefaultData=async ()=>{
    try {
        await product.deleteMany({} );
      await  product.insertMany(products);
      console.log("data imported succ.." );
    } catch (error) {
        console.log( "error" , error.message  )
    }
}
export default DefaultData;