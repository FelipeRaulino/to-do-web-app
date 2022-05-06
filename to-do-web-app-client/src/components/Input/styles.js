import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;

  input{
    margin: 0.5rem 0;
    height: 35px;
    width: 100%;
    border: 1px solid #ececec;
    border-radius: 5px;
    background-color: #1E252B;
    color: #fff;
    padding: 0 2rem;
    transition: all 0.25s;

    &:focus{
      outline: none;
      border: 1px solid #fff;
      box-shadow: 0 0 5px rgba(255, 255, 255, 1);
    }
  }

  svg:first-of-type{
    position: absolute;
    width: 18px;
    top: 50%;
    transform: translate(0, -50%);
    left: 8px;
  }

  svg:nth-of-type(2){
    position: absolute;
    width: 18px;
    top: 50%;
    transform: translate(0, -50%);
    right: 8px;
    margin-left: 2px;
    cursor: pointer;
  }


`;

export default InputContainer;
