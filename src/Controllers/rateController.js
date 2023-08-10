import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';
import { Sequelize } from 'sequelize';

const model = initModels(sequelize);

// Rate --> create
const createRate = async (req, res) => {
    try {
        let { user_id, res_id, amount, date_rate } = req.body;
        let checkUserRate = await model.rate_res.findOne({
            where: {
                user_id: user_id,
                res_id: res_id
            }
        })
        if (checkUserRate){
            res.send("Người này đã đánh giá nhà hàng này rồi.");
            return;
        }
        await model.rate_res.create({ user_id, res_id, amount, date_rate });
        res.send("Đánh giá nhà hàng thành công.");
    }catch(e){
        res.status(500).send("Lỗi BE");
    }
}

const getRate = async (req, res) => {
    let data = await model.rate_res.findAll()
    res.send(data);
}

const getRateByRes = async (req, res) => {
    let { res_id } = req.params;
    let data = await model.rate_res.findAll({
        where: {
            res_id: res_id
        }
    });
    res.send(data);
}

const getRateByUser = async (req, res) => {
    let { user_id } = req.params;
    let data = await model.rate_res.findAll({
        where: {
            user_id: user_id
        }
    });
    res.send(data);
}

export { createRate, getRate, getRateByRes, getRateByUser }