const User = require("../models/user");
exports.createUser = async (req, res) => {

    try {
        const { name, email } = req.body;
        if (!(name && email)) return res.json("Please Enter All Fields");
        let existingUser = await User.findOne({ where: { name: name } })
        if (existingUser) {
            console.log(existingUser);
            return res.json("User Already Exists");
        }
        let user = await User.create({ name, email });
        res.json("User Created Successfully")
    }
    catch (err) {
        console.log(err)
        return res.json(err);

    }
};

exports.findAll = async (req, res) => {
    try {
        let allUser = await User.findAll();
        if (!allUser) {
            console.log("No Users Found");
            return res.json("No Users Found");
        }
        return res.json(allUser);
    } catch (error) {
        console.log(error);
        res.json(error)
    }
};

exports.findUser = async (req, res) => {

    try {
        const { email } = req.params;
        let oneUser = await User.findOne({ where: { email: email } });
        if (!oneUser) {
            console.log("User doesn't Exists");
            return res.json("User doesn't Exists");
        }
        res.json(oneUser)
    }
    catch (err) {
        console.log(err);
        res.json(err);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { email } = req.body;
        const { name } = req.params;
        let [updatedUser] = await User.update({ email: email }, { where: { name: name } });
        if (![updatedUser] == 0) {
            console.log("User  updated");
            return res.json("User  updated")
        }
        else {
            return res.json("User not Updated")
        }
    } catch (err) {
        console.log(err);
        res.json(err);
    }

};

exports.deleteUser=async(req,res)=>{
    try {
        let {name}=req.params;
        let delUser=await User.destroy({where:{name:name}});
        console.log(delUser)
        if (!delUser==0) {
            console.log("User  deleted");
            return res.json("User  deleted")
        }
        else {
            return res.json("User not deleted")
        }
        
    } catch (err) {
        console.log(err);
        res.json(err);
    }
};
