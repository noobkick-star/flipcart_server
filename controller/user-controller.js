
import User from "../model/userschema.js";


export const userSignup = async(req,res)=>{
    try {
        const exist = await User.findOne( { username :req.body.username  }  );
        if( exist){ 
            return res.status(401).json("username already exist")
            
        }
        const user=req.body;
        const newUser = new User(user);
       await newUser.save();
       res.status(200).json("user is successfully registered")
    } catch (error) {
        console.log( "error" , error.message )
    }
   
}

export const userLogin = async (req , res )=>{
    try {
        let user= await User.findOne( { username :req.body.username , password :req.body.password  } )
        if(user ){
            return res.status(200).json( `${req.body.username } logged successfully ` )
        }
        else{
            return res.status(401).json("invalid")
        }
    } catch (error) {
        console.log( "error" , error.message )
    }
}