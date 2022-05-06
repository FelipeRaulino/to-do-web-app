import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  position: relative;

  .link-back{
    position: absolute;
    top: 20px;
    left: 20px;
    color: #fff;
    transition: filter 500ms;

    &:hover{
      filter: brightness(0.8);
    }
  }
`;

const LoginDescription = styled.div`
  text-align: center;
  margin: 1rem;

  h1{
    margin: 1.25rem;
    text-transform: uppercase;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  min-width: 480px;
`;

const InputFields = styled.div`
  label{
    display: flex;
    flex-direction: column;
    margin: 0.25rem 0;
    font-size: 0.8rem;
    font-weight: 700;
  }

  .p-alert-error{
    color: #f05353;
    margin-bottom: 10px;
  }
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
  justify-content: center;

  span{
    font-size: 1rem;
    font-weight: 700;
  }

  a{
    align-self: cen ;
  }
`;

export {
  Container, LoginDescription, Form, InputFields, SignUpContainer,
};
