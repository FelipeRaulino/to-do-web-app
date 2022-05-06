import React from 'react';
import { motion } from 'framer-motion';

import { AiOutlineClose, AiFillCheckCircle } from 'react-icons/ai';
import { MdError } from 'react-icons/md';

import Container from './styles';

function Token({ type, message, formErrorStatus }) {
  return (
    <Container
      id="token"
      type={type}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <span>
        {
          type === 'success' ? <AiFillCheckCircle /> : <MdError />
        }
      </span>
      <p>{message}</p>
      <button type="button" onClick={() => formErrorStatus({ status: false, message: '' })}><AiOutlineClose /></button>
    </Container>
  );
}

export default Token;
