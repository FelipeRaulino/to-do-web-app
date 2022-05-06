import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  min-height: 100vh;
  width: 100px;
  left: 0;
  background-color: #25323B;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  .sidebar-title{
    margin: 1.5rem 0;
    h1{
      font-size: 1.25rem;
    }
  }

  .icons{
    display: flex;
    flex-direction: column;
    margin: 1rem 0 0;
    width: 100%;
    flex: 1;

    .icon-item{
      padding: 20px;
      transition: all 0.35s;
      cursor: pointer;

      &:hover{
        background-color: #181F25;
      }

      &:last-of-type{
        margin-top: auto;
      }
    }

    .selected{
      background-color: #181F25;
    }
  }

  
`;

export default Container;
