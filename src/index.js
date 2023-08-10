// node_modules => source thư viện
// package.json => tên thư viện vesion bằng cấu trúc json

// npm i = yarn install
// npm install = yarn add
// npm uninstall = yarn remove

// yarn init (nhớ enter) => tạo file package.json

// yarn add express =>framework tạo server backend

import express from 'express';
const app = express();
app.use(express.json()) // hàm gọi middleware chuyển đổi cấu trúc json để backend nhận được

app.use(express.static(".")) // Hàm định vị đường dẫn để load tài nguyên trên source

import cors from 'cors';
app.use(cors({
    origin: ["http://localhost:5500", "http://abc.com", "https://abc.com"]
})); // middleware chấp nhận tất FE truy cập vào

app.listen(8080); // => khởi tạo server với port tự quy định

// ctrl + C : tắt server
// localhost:8080

// yarn add nodemon => auto reset server khi save

// API
// tham số 1: endpoint , params
// tham số 2: request, response
// localhost:8080/api
app.get("/demo/:id/:email", (req, res) => {
    // tất cả dữ liệu lấy từ url đều là chuỗi (string)

    // nhận từ url: params 
    //  + query string: localhost:8080/api   ? id=1 & email=abc@gmail.com

    //let { id, email } = req.query; // destructering

    //  + query params: localhost:8080/api/1/abc@gmail.com
    let { id, email } = req.params;

    // nhận json: body
    let { hoTen, phone } = req.body;

    res.status(200).send({ id, email, hoTen, phone });// trả về bất kỳ kiểu dữ liệu nào trừ number
});

// kết CSDL
// yarn add mysql2
// import mysql2 from 'mysql2';

// const conn = mysql2.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1234",
//     database: "db_node33",
//     port: "3306"
// })
// endpoint: viết thường và cách nhau bởi gạch ngang

// http://localhost:8080/api/food/get-food

import rootRoutes from './Routes/rootRoutes.js';

app.use("/api",rootRoutes)

// kết nối FE với BE
// 2 cái

// yarn add cors