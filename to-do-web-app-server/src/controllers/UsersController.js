import bcript from "bcryptjs";

import User from "../models/User.js";

class UsersController{

  async retrieveAllUsers(req, res){
    try {
      const users = await User.find({ }).exec();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ "Error": error.message });
    }
  }

  async createUser(req, res){
    try {
      const { name, email, password } = req.body;
      const encriptedPassword = await bcript.hash(password, 8);
      
      const existUser = await User.findOne({ email: email }).exec();

      if(!!existUser){
        return res.status(422).json({ "Error": `User with email '${email}' already exists` });
      }
      
      const user = new User({ name, email, password: encriptedPassword });
      await user.save();
      res.json(user);

    } catch (error) {
      res.status(500).json(error);
    }
  }

}

export default new UsersController();