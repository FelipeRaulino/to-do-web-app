import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import * as Yup from 'yup';

import { BsFillPersonFill } from 'react-icons/bs';
import { BiArrowBack, BiTask } from 'react-icons/bi';
import { RiKey2Fill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

import {
  Container, Form, InputFields, LoginDescription,
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import AxiosConncection from '../../services/Connecion';

function SignUpPage() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('This field is required'),
      email: Yup.string().email('Must be a valid email').required('This field is required'),
      password: Yup.string().min(4, 'Minimumn of 4 digits').required('This field is required'),
    }),
  });

  const handlePasswordToggle = () => {
    const password = document.getElementById('password');

    if (password.getAttribute('type') === 'password') {
      password.setAttribute('type', 'text');
    } else {
      password.setAttribute('type', 'password');
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formik.values;

    try {
      await AxiosConncection.post('/user', {
        name, email, password,
      });
      navigate('/login');
    } catch (error) {
      const { Error } = error.response.data;
      toast.error(Error, {
        position: 'top-center',
        autoClose: false,
      });
    }
  };

  return (
    <Container
      as={motion.div}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Link to="/login">
        <BiArrowBack size="28px" className="link-back" />
      </Link>

      <LoginDescription>
        <BiTask size="4rem" color="#7E869E" />
        <h1>Sign-Up</h1>
        <ToastContainer />
      </LoginDescription>

      <Form onSubmit={handleOnSubmit} autoComplete="off">
        <InputFields>
          <label htmlFor="name">
            Name
            <Input
              type="text"
              name="name"
              leftIcon={<BsFillPersonFill />}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {!!formik.errors.name && <p className="p-alert-error">{formik.errors.name}</p>}
          </label>
        </InputFields>
        <InputFields>
          <label htmlFor="email">
            Email
            <Input
              type="email"
              name="email"
              leftIcon={<MdEmail />}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {!!formik.errors.email && <p className="p-alert-error">{formik.errors.email}</p>}
          </label>
        </InputFields>
        <InputFields>
          <label htmlFor="password">
            Password
            <Input
              type="password"
              name="password"
              leftIcon={(
                <RiKey2Fill
                  onClick={handlePasswordToggle}
                />
              )}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {!!formik.errors.password && <p className="p-alert-error">{formik.errors.password}</p>}
          </label>
        </InputFields>
        <Button
          disabled={
            !formik.values.name || formik.errors.name
            || !formik.values.email || formik.errors.email
            || !formik.values.password || formik.errors.password
          }
          type="submit"
        >
          Sign-Up
        </Button>
      </Form>
    </Container>
  );
}

export default SignUpPage;
