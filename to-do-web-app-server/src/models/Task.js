import mongoose from "mongoose";

const TaskSchema = mongoose.Schema(
  {
    userId: {
      type: 'String',
      required: true
    },
    title: {
      type: 'String',
      required: true,
    },
    description: {
      type: 'String',
      required: true,
    },
    status: {
      type: 'String',
      required: true,
      default: 'pending'
    }
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);

export default Task;