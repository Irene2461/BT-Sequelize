import  express  from "express";
import { findFood, getFood } from "../Controllers/foodController.js";

const foodRoutes = express.Router();


// /food/get-food", getFood

// nơi định nghĩa API và quản lý chức năng của đối tượng
// GET, POST, PUT, DELETE

foodRoutes.get("/get-food",getFood);
foodRoutes.get("/find-food",findFood);

// yarn add multer (để up hình)
import multer from 'multer';

// process.cwd(): dường dẫn gốc của source
// __dirname: trả về đường dẫn mà file đang đứng 
// upload ngao.jpg => trùng tên hình đã có trên src

// Dùng này để đổi tên file trùng
const storage = multer.diskStorage({
    destination: process.cwd() + "/public/img",
    fileName: (req, file, callback) => {
        // đặt tên file
        // Time => YYYY-MM-DD hh:mm:ss:ms
        // random()

        let date = new Date(); // Lấy ngày hiện hành của hệ thống
        let newName = date.getTime();

        callback(null, newName + "_" + file.originalname);
    } // Nơi để đổi tên file khi client upload
});

const upload = multer({
    storage
})

foodRoutes.post("/upload", upload.single("file"), (req, res) => {
    let file = req.file;
    // file.size // => Byte
    // if (file.size >= 5000000){
    //     // Xoá file
    // }
    res.send(file);

    //Sửa single thành array nếu muốn up nhiều hình
});



export default foodRoutes;