import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

const LoginDescription = styled.div`
  text-align: center;
  margin: 2rem;

  h1{
    margin: 1.25rem;
    text-transform: uppercase;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  min-width: 480px;
  gap: 5px;
`;

const InputFields = styled.div`
  label{
    display: flex;
    flex-direction: column;
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

  span{
    font-size: 1rem;
    font-weight: 700;
  }

  a{
    align-self: center;
  }
`;

export {
  Container, LoginDescription, Form, InputFields, SignUpContainer,
};
