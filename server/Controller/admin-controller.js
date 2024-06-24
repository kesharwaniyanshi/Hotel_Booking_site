const Contact = require("../models/contact-model");
const User = require("../models/user-model");


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        if (!users || users.length === 0) {
            return (res.status(404).json({ message: "No users found" }));
        }
        return (res.status(200).json({ users }));

    }
    catch (error) {
        next(error);
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 });
        return res.status(200).json({ data });
    } catch (error) {
        // next(error);
        console.log(error);
    }
};

const getAllMessages = async (req, res) => {
    try {
        const messages = await Contact.find();
        if (!messages || messages.length === 0) {
            return (res.status(404).json({ message: "No messages found" }));
        }
        return (res.status(200).json({ messages }));

    }
    catch (error) {
        next(error);
    }
};

const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;


        const updatedData= await User.updateOne({ _id: id }, { $set: updatedUserData });
        return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
}

const deletUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        return res.status(200).json({ message: "User deleted Successfully" });
    } catch (error) {
        next(error);
        // console.log(error);
    }
};

const deleteMsgById = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id });
        return res.status(200).json({ message: "Message deleted Successfully" });
    } catch (error) {
        next(error);
        // console.log(error);
    }
};



module.exports = { getAllUsers, getAllMessages, deletUserById, getUserById, updateUserById ,deleteMsgById};