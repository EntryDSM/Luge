import styled from "styled-components";

export const S = {
  TotalWrapper: styled.div`
    width: 100%;
    height: calc(100vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    justify-content: center;
    background-color:#F2F2F8;
  `,
  LoadingBarWrapper: styled.div`
    border: 1px solid black;
    width: 200px;
    height: 10px;
    background-color: lightgray;
    box-sizing:content-box;
    border-radius:5px;
    overflow:hidden;
    
  `,
  Loadingbox:styled.div`
    height:10px;
    border-radius:5px;
    background-color:lime;
    
    @keyframes loading {
      0% {
        width:0px;
        
        
      }

      50% {
        
          background-color:lightblue;
        width: 100%;
        margin-left:0px;
      }
      100%{
        width:0px;
        margin-left:100%;
        background-color:yellowgreen;
      }
    }
    animation-name:loading;
    animation-duration:3s;
    animation-iteration-count:infinite;
  `,
};
