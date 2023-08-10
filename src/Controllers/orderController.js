import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';
import { Sequelize } from 'sequelize';

const model = initModels(sequelize);

// Thêm order --> create
const createOrder = async (req, res) => {
    try {
        let { user_id, food_id, amount, code, arr_sub_id } = req.body;
        // Check xem user này đã like nhà hàng này chưa
        let checkOrder = await model.order.findOne({
            where: {
                code: code
            }
        });
        if (checkOrder){
            res.send("Order này đã tồn tại.");
            return;   
        }

        await model.order.create({ user_id, food_id, amount, code, arr_sub_id })
        res.send("Thêm order thành công.");
    }catch(e){
        res.status(500).send("Lỗi BE");
    }
}

export { createOrder }