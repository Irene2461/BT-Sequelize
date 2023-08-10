import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';
import { Sequelize } from 'sequelize';

const Op = Sequelize.Op;

const model = initModels(sequelize);

// R => get all
const getUser = async (req, res) => {
    // Bất đồng bộ => Asynchronous
    // SELECT * FROM user WHERE user_id = 1 => List object => [{},{}]
    let data = await model.user.findAll(); // => Read
    res.send(data);
}

// R => get by id
const getUserById = async (req, res) => {

    let { id } = req.params;

    // SELECT * FROM user WHERE user_id = 1 LIMIT 1 => object => {}
    let data = await model.user.findOne({
        where: { user_id: id }
    }); // => Read
    // let data2 = await model.user.findByPk(1);
    res.send(data);
}

// CUD
const createUser = async (req, res) => {
    try {
        let { full_name, email, pass_word } = req.body;

        // Check xem email đã tồn tại chưa
        let checkEmail = await model.user.findOne({
            where: {
                email
            }
        });

        if (checkEmail) {
            res.send("Email đã tồn tại !");
            return; // Có dòng này để ngắt lệnh ko cho tạo tiếp
        }

        await model.user.create({ full_name, email, pass_word });
        res.send("Thêm mới thành công");
    } catch(exp) {
        res.status(500).send("Lỗi BE");
    }
}
const updateUser = async (req, res) => {
    let { id } = req.params;
    let { full_name, email, pass_word } = req.body;

    // Check trùng email
    let checkEmail = await model.user.findOne({
        where: {
            email
        }
    });
    if (checkEmail) {
        res.send("Email đã tồn tại !");
        return; // Có dòng này để ngắt lệnh ko cho tạo tiếp
    }

    await model.user.update({ full_name, email, pass_word }, { where: { user_id: id } });
    res.send("Cập nhật thành công");
}
const deleteUser = async (req, res) => {
    let { id } = req.params;
    // DELETE FROM user WHERE user_id = ...;

    await model.user.destroy({ where: { user_id: id } });
    res.send("Xoá thành công");
}

const getUserByName = async (req, res) => {
    let { fullName } = req.params;
    // SELECT * FROM user WHERE full_name LIKE '%...%'
    let data = await model.user.findAll({
        where: {
            full_name: {
                [Op.like]: `%${fullName}%`
            }
        }
    });
    
    res.send(data);
}

export { getUser, getUserById, createUser, updateUser, deleteUser, getUserByName }
