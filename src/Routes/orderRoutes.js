import express from 'express';
import {
    createOrder
} from '../Controllers/orderController.js';

const orderRoutes = express.Router();
// Read

// CUD
orderRoutes.post("/create-order", createOrder);

export default orderRoutes;
