import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  min-height: 100vh;
  width: 100%;
  padding-right: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1C252C;

  .modalContainer{
    display: flex;
    flex-direction: column;
    background-color:#25323B;
    padding: 15px;
    min-width: 500px;
    position: relative;
    border-radius: 5px;

    svg{
      position: absolute;
      top: 5px;
      right: 5px;
      transition: filter 250ms;
      cursor: pointer;

      &:hover{
        filter: brightness(0.8);
      }
    }

    .modalTitle{
      margin: 1rem;
      text-align: center;

      h1{
        font-size: 20px;
      }
    } 

    form{
      display: flex;
      flex-direction: column;
      justify-content: center;

      .inputField{
        display: flex;
        flex-direction: column;
        margin: 5px;
  
          label{
            font-size: 12px;
            font-weight: bold;
          }
    
          input{
            padding-left: 5px;
          }
    
          textarea{
            height: 80px;
            margin-top: 5px;
            background-color: #1E252B;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 3px;
            padding: 5px;
            transition: box-shadow 250ms;
            font-size: 12px;
    
            &:focus{
              outline: none;
              box-shadow: 0 0 5px rgba(255, 255, 255, 1);
            }
          }

          select{
            margin-top: 5px;
            background-color: #1E252B;
            color: #fff;
            height: 35px;
            border: 1px solid #fff;

            &:focus{
              outline: none;
            }
          }
      }
  
      button{
        margin-top: 5px;
        justify-self: center;
      }
    }
  }
`;

export default Container;
