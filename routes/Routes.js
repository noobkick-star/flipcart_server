import express from "express";
import { userSignup,userLogin } from "../controller/user-controller.js";
import { getProducts,getProductById } from '../controller/product-controller.js';
import { addPaymentGateway } from "../controller/payment-controller.js";
const Routes = express.Router();

Routes.post( "/signup" ,userSignup  );
Routes.post( "/login" ,userLogin  );

Routes.get('/products', getProducts);
Routes.get('/product/:id', getProductById);

Routes.post( "/payment" ,addPaymentGateway  );

export default Routes;