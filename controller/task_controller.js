const User = require("../models/user");
const Task = require("../models/task");

exports.createTask = async (req, res) => {
    try {
        let { taskDesc, taskArea, name } = req.body;
        let users = await User.findOne({ where: { name: name } });
        let tasks = await Task.create({
            taskDesc, taskArea
        });

        users.setTask(tasks);
       //tasks.setUser(users)
        return res.json("Task Created Successfully");
    }

    catch (e) {
        console.log(e);
        res.json(e.message);
    }

};


exports.getUserTasks = async (req, res) => {
    try {
        let { name } = req.body;

        let userAndTask = await User.findOne({ where: { name: name }, include: [{ model: Task, as: "task", attributes: ['taskDesc', 'taskArea'] }] });
        return res.json(userAndTask);

    }
    catch (e) {
        console.log(e);
        res.json(e.message);
    }
}
