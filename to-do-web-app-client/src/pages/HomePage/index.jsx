import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { AiFillPlusCircle } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdAccessTimeFilled } from 'react-icons/md';

import Container from './styles';

import SideBar from '../../components/SideBar';

import { AuthContext } from '../../context/AuthContext';
import AxiosConncection from '../../services/Connecion';
import Modal from '../../components/Modal';

function HomePage() {
  /* eslint-disable no-console  */
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editOption, setEditOption] = useState(false);
  const [specifTask, setSpecifcTask] = useState(null);

  const handleRetrievingTasks = async () => {
    try {
      const { _id } = user;
      const response = await AxiosConncection.get(`/task/${_id}`);
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  };

  const handleAddNewTask = async (title, description) => {
    try {
      const { _id } = user;
      const response = await AxiosConncection.post('/task', {
        userId: _id,
        title,
        description,
      });
      setTasks((prevState) => [...prevState], response);
      setOpenModal(!openModal);
      return await handleRetrievingTasks();
    } catch (error) {
      return console.log(error.message);
    }
  };

  const handleChangingStatus = async (taskId, taskStatus) => {
    try {
      const { _id } = user;
      let status;
      if (taskStatus === 'pending') {
        status = 'success';
      } else {
        status = 'pending';
      }
      await AxiosConncection.put(`/taskStatus/${_id}/${taskId}`, { status });
      await handleRetrievingTasks();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEditingTasks = async (taskId, title, description, status) => {
    try {
      const { _id } = user;
      await AxiosConncection.put(`/task/${_id}/${taskId}`, { title, description, status });
      setOpenModal(!openModal);
      await handleRetrievingTasks();
    } catch (error) {
      console.log(error.message);
    }
  };

  /* eslint-disable */
  useEffect(() => {
    (async () => await handleRetrievingTasks())();
  }, []);

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25 }}
    >
      <SideBar />
      <div className="content">
        <a href="#" onClick={() => setOpenModal(!openModal)}>
          <AiFillPlusCircle />
          Create a new task,
          {!!user && (
            <span>
              {user.name}
            </span>
          )}
        </a>
        <h1 className="content__title">All Tasks</h1>
        <div className="content__task-container">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="content__task-item"
              onClick={() => {
                setSpecifcTask(task);
                setOpenModal(true);
                setEditOption(true);
              }}
            >
              <h1 className="content__task-title">{task.title}</h1>
              <p className="content__task-description">{task.description}</p>
              <span className="content__task-date">{handleFormatDate(task.createdAt)}</span>
              {task.status === 'pending'
                ? (
                  <MdAccessTimeFilled
                    title="Pending"
                    color="#DAC935"
                    onClick={() => handleChangingStatus(task._id, task.status)}
                  />
                )
                : (
                  <BsFillCheckCircleFill
                    title="Success"
                    color="#61BA64"
                    size="0.85rem"
                    onClick={() => handleChangingStatus(task._id, task.status)}
                  />
                )}
            </div>
          ))}
        </div>
      </div>
      {openModal &&
        <Modal
          task={specifTask}
          addNewTask={handleAddNewTask}
          editTask={handleEditingTasks}
          editOption={editOption}
          setEditOption={setEditOption}
          closeModal={setOpenModal}
        />
      }
    </Container>
  );
}

export default HomePage;
