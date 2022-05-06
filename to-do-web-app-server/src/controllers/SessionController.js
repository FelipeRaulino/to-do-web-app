import bcript from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';

import User from "../models/User.js";
import TokenConfigs from "../config/auth.js";

class SessionController{

  async createSession(req, res){
    try {
      const { email, password } = req.body;
  
      const existUser = await User.findOne({ email }).exec();
      if (!existUser){
        return res.status(404).json({ Message: 'Email or password invalid.' });
      }
      
      const comparePassword = bcript.compareSync(password, existUser.password);
      if(!comparePassword){
        return res.status(400).json({ Message: 'Email or password invalid.' });
      }

      return res.json({
        user: existUser,
        token: jsonwebtoken.sign(
          { id: existUser.id }, 
          TokenConfigs.jwt.secret, 
          { expiresIn: TokenConfigs.jwt.expiresIn }
        ),
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ Message: 'Server Internal Error' });
    }
  }
  
}

export default new SessionController();