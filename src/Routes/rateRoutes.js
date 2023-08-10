import express from 'express';
import {
    createRate,
    getRate,
    getRateByRes,
    getRateByUser
} from '../Controllers/rateController.js';

const rateRoutes = express.Router();

//Read
rateRoutes.get("/get-rate", getRate);
rateRoutes.get("/get-rate-by-res-id/:res_id", getRateByRes);
rateRoutes.get("/get-rate-by-user-id/:user_id", getRateByUser);

//CUD
rateRoutes.post("/create-rate", createRate);

export default rateRoutes;