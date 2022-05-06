import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 450px;
  min-height: 80px;
  padding: 10px;
  margin: 5px;
  border-radius: 3px;
  position: relative;
  background-color: #7E869E;
  align-items: center;

  ${({ type }) => type === 'success' && `
    background-color: #9ec98a;
    color: #1F3117;
  `};

  ${({ type }) => type === 'error' && `
    background-color: #d37c7c;
    color: #481818;
  `};

  span{
    position: absolute;
    top: 5px;
    left: 6px;
  }

  button{
    position: absolute;
    top: 5px;
    right: 6px;
    cursor: pointer;
    border: none;
    background: transparent;
  }

  p{
    font-size: 14px;
    font-weight: bold;
    padding-left: 10px;
  }
`;

export default Container;
