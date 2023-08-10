import express from 'express';
import foodRoutes from './foodRoutes.js';

import userRoutes from './userRoutes.js';

import likeRoutes from './likeRoutes.js';

import rateRoutes from './rateRoutes.js';

import orderRoutes from './orderRoutes.js';


//  quản lý tên đối tượng endpoint
const rootRoutes = express.Router();

// quản lý đối tượng food
rootRoutes.use("/food", foodRoutes);

// quản lý đối tượng user
rootRoutes.use("/user", userRoutes);

// quản lý đối tượng like
rootRoutes.use("/like", likeRoutes);

// quản lý đối tượng rate
rootRoutes.use("/rate", rateRoutes);

// Quản lý đối tượng order
rootRoutes.use("/order", orderRoutes);

export default rootRoutes;