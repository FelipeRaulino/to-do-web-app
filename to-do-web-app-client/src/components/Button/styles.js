import styled from 'styled-components';

const ButtonContainer = styled.button`
  width: 150px;
  height: 35px;
  align-self: center;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: #1E252A;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;

  :hover{
    background-color: #252e35;
  }

  :disabled{
    cursor: not-allowed;
    background-color: #3d4144;
  }
`;

export default ButtonContainer;
