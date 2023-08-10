import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';
import { Sequelize } from 'sequelize';

const model = initModels(sequelize);

// Like --> create
const createLike = async (req, res) => {
    try {
        let { user_id, res_id, date_like  } = req.body;
        // Check xem user này đã like nhà hàng này chưa
        let checkUserLike = await model.like_res.findOne({
            where: {
                user_id: user_id,
                res_id: res_id
            }
        });
        if (checkUserLike){
            res.send("Người này đã like nhà hàng rồi.");
            return;   
        }

        await model.like_res.create({ user_id, res_id, date_like })
        res.send("Like thành công");
    }catch(e){
        res.status(500).send("Lỗi BE");
    }
}
// Unlike --> delete
const deleteLike = async (req, res) => {
    try {
        let { user_id, res_id } = req.body;
        await model.like_res.destroy({
            where: {
                user_id: user_id,
                res_id: res_id
            }
        });
        res.send("Unlike thành công");
    } catch(e){
        res.status(500).send("Lỗi BE");
    }
}

// Lấy danh sách like theo nhà hàng và user
const getLike = async (req, res) => {
    let data = await model.like_res.findAll();
    res.send(data);
}

const getLikeByRes = async (req, res) => {
    let { res_id } = req.params;
    let data = await model.like_res.findAll({
        where: {
            res_id: res_id
        }
    });
    res.send(data);
}

const getLikeByUser = async (req, res) => {
    let { user_id } = req.params;
    let data = await model.like_res.findAll({
        where: {
            user_id: user_id
        }
    });
    res.send(data);
}


export { createLike, deleteLike, getLike, getLikeByRes, getLikeByUser }