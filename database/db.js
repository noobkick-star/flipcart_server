import mongoose from "mongoose";

const Connection = async(  username ,password )=>{
    //console.log("not connect")
const URL=`mongodb+srv://${username}:${password}@ecommerceweb.xhyoy.mongodb.net/ECOMMERCE?retryWrites=true&w=majority`

    try{
        await mongoose.connect( URL   )
        console.log("database connected successfully" )
    }
   catch(error ){
       console.log("Error has ocuured here" , error.message  );
   }
}
export default Connection