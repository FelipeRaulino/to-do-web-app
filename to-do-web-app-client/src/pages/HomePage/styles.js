import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  padding-left: 100px;

  .content{
    height: 100vh;
    text-align: center;

      a{
        position: absolute;
        top: 1.5rem;
        right: 5rem;
        display: flex;
        align-items: center;
        color: #cfcfcf;
        text-decoration: none;
        transition: all 0.3s;
        gap: 2px;
      
        svg{
          margin-right: 5px;
        }

        &:hover{
          color: #fff;
        }
      }

      .content__title{
        font-size: 1.5rem;
        margin-top: 5rem;
      }

      .content__task-container{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        margin: 1rem auto;
        max-width: 1200px;
        gap: 10px;
        padding: 20px;
        align-items: center;
        justify-content: center;
      }

      .content__task-item{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 350px;
        height: 120px;
        background-color: #25323B;
        text-align: left;
        padding: 10px;
        border-radius: 5px;
        justify-self: center;
        transition: transform 250ms;
        cursor: pointer;

        &:hover{
          transform: scale(1.025);
        }

        .content__task-title{
          font-size: 1.25rem;
        }

        .content__task-description{
          font-size: 1rem;
        }

        svg{
          position: absolute;
          bottom: 0.7rem;
          right: 1rem;
          cursor: pointer;
        }

      }
      
      .content__task-date{
        font-size: 12px;
        margin-top: auto;
      }
   
  }
`;

export default Container;
