import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';

import { AiFillCloseCircle } from 'react-icons/ai';

import Container from './styles';

import Input from '../Input';
import Button from '../Button';

function Modal({
  closeModal, addNewTask, task, editOption, setEditOption, editTask,
}) {
  const formik = useFormik({
    initialValues: {
      title: `${editOption ? task.title : ''}`,
      description: `${editOption ? task.description : ''}`,
      status: task.status,
    },
  });

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.950 }}
      exit={{ opacity: 0 }}
      delay={0.500}
    >
      <div className="modalContainer">
        <AiFillCloseCircle
          size="20px"
          onClick={() => {
            setEditOption(false);
            closeModal(false);
          }}
        />
        <div className="modalTitle">
          <h1>{editOption ? 'Editing a task' : 'Adding a new task'}</h1>
        </div>
        <form>
          <div className="inputField">
            <label htmlFor="title">Title</label>
            <Input onChange={formik.handleChange} value={formik.values.title} type="text" id="title" />
          </div>
          <div className="inputField">
            <label htmlFor="description">Description</label>
            <textarea onChange={formik.handleChange} value={formik.values.description} id="description" />
          </div>
          {editOption && (
            <div className="inputField">
              <label htmlFor="status">Status</label>
              <select value={formik.values.status} onChange={formik.handleChange} id="status">
                <option hidden>Change Status</option>
                <option value="pending">Pending</option>
                <option value="success">Concluded</option>
              </select>
            </div>
          )}
          <Button
            onClick={() => {
              if (editOption) {
                const { _id } = task;
                return editTask(
                  _id,
                  formik.values.title,
                  formik.values.description,
                  formik.values.status,
                );
              }
              return addNewTask(formik.values.title, formik.values.description);
            }}
            type="button"
          >
            {editOption ? 'Salvar edições' : 'Adicionar'}
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Modal;
