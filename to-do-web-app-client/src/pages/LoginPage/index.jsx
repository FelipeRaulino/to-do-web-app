import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { BiTask, BiEnvelope } from 'react-icons/bi';
import { RiKey2Fill } from 'react-icons/ri';
import { AiFillEye } from 'react-icons/ai';

import { ToastContainer } from 'react-toastify';
import {
  Container, Form, InputFields, LoginDescription, SignUpContainer,
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { AuthContext } from '../../context/AuthContext';

function LoginPage() {
  const { Login } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
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
    const { email, password } = formik.values;
    await Login(email, password);
  };

  return (
    <Container
      as={motion.div}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.25 }}
    >
      <LoginDescription>
        <BiTask size="4rem" color="#7E869E" />
        <h1>To-Do Web App</h1>
        <ToastContainer />
      </LoginDescription>

      <Form onSubmit={handleOnSubmit} autoComplete="off">
        <InputFields>
          <label htmlFor="email">
            Email
            <Input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              leftIcon={<BiEnvelope />}
            />
            {!!formik.errors.email && <p className="p-alert-error">{formik.errors.email}</p>}
          </label>
        </InputFields>
        <InputFields>
          <label htmlFor="password">
            Senha
            <Input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              leftIcon={<RiKey2Fill />}
              rightIcon={
                <AiFillEye onClick={handlePasswordToggle} />
              }
            />
            {!!formik.errors.password && <p className="p-alert-error">{formik.errors.password}</p>}
          </label>
        </InputFields>
        <Button
          disabled={
            !formik.values.email || !formik.values.password
            || formik.errors.email || formik.errors.password
          }
          type="submit"
        >
          Login
        </Button>
      </Form>

      <SignUpContainer>
        <span>Não tem uma conta ?</span>
        <Link to="/signup">
          <Button>Sign-Up</Button>
        </Link>
      </SignUpContainer>
    </Container>
  );
}

export default LoginPage;
