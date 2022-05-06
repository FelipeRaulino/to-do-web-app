import mongoose from "mongoose";
import Task from "../models/Task.js";
import User from "../models/User.js";

class TasksController{

  async createTask(req, res){
    try {
      const { userId, title, description } = req.body;
      
      const taskExists = await Task.findOne({ title }).exec();
      if (!!taskExists){
        return res.status(422).json({ Message: `Task with title: '${title}' already exist.` });
      }

      const task = new Task({ userId, title, description });
      await task.save();
      return res.status(200).json(task);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ Message: 'Server Internal Error.' });  
    }
  }

  async retrieveAllTasksUser(req, res){
    try {
      const { userId } = req.params;
      const userExist = await User.findById(userId).exec();
      if (!userExist){
        return res.status(422).json({ message: 'User does not exists.' });
      }

      const allTasks = await Task.find({ userId }).exec();
      return res.status(200).json(allTasks);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ Message: 'Server Internal Error.' }); 
    }
  }

  async updateTask(req, res){
    try {
      const { userId, taskId } = req.params;
      const { title, description, status } = req.body;
      const taskExist = await Task.findOne({ _id: taskId, userId });
      if(!taskExist){
        return res.status(400).json({ message: 'Task not found' });
      }
      await taskExist.updateOne({ title, description, status });
      return res.status(200).json(taskExist);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ message: 'Server Internal Error.' });
    }
  }

}

export default new TasksController();