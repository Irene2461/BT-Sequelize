import express from 'express';
import {
    createLike,
    deleteLike,
    getLike,
    getLikeByRes,
    getLikeByUser
} from '../Controllers/likeController.js';

const likeRoutes = express.Router();
// Read
likeRoutes.get("/get-like", getLike);
likeRoutes.get("/get-like-by-res-id/:res_id", getLikeByRes);
likeRoutes.get("/get-like-by-user-id/:user_id", getLikeByUser);

// CUD
likeRoutes.post("/create-like", createLike);
likeRoutes.delete("/delete-like", deleteLike);

export default likeRoutes;
