import React, { useContext, useState } from 'react';

import { FaUserAlt, FaClipboardList } from 'react-icons/fa';
import { IoMdExit } from 'react-icons/io';

import { useNavigate } from 'react-router-dom';
import Container from './styles';

import { AuthContext } from '../../context/AuthContext';

function SideBar() {
  const { Logout } = useContext(AuthContext);
  const [isClicked, setIsClicked] = useState('second');
  const navigate = useNavigate();

  return (
    <Container>
      <div className="sidebar-title">
        <h1>To-do</h1>
        <h1>App</h1>
      </div>
      <div className="icons">
        <div
          className={isClicked === 'first' ? 'icon-item selected' : 'icon-item'}
          aria-hidden
          onClick={() => {
            navigate('/');
            setIsClicked('first');
          }}
        >
          <FaUserAlt size="2rem" />
        </div>
        <div
          className={isClicked === 'second' ? 'icon-item selected' : 'icon-item'}
          aria-hidden
          onClick={() => {
            navigate('/');
            setIsClicked('second');
          }}
        >
          <FaClipboardList size="2rem" />
        </div>
        <div className="icon-item" onClick={Logout} aria-hidden="true">
          <IoMdExit size="2rem" />
        </div>
      </div>
    </Container>
  );
}

export default SideBar;
