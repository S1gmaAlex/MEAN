const { User } = require("../model/model");

const HomeController = {
    //add
    addData: async (req, res) => {
        try {
            const newUser = new User(req.body);
            const saveUser = await newUser.save();
            res.status(200).json(saveUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //get all
    getAllData: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //update data
    updateData: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            await user.updateOne({ $set: req.body });
            res.status(200).json("updated successfully!!");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //delete data
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("deleted successfully!!");
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = HomeController;