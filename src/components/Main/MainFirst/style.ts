import styled from "styled-components";
import { pxToRem } from "../../../styles";

export const S = {
  TotalWrapper: styled.div`
    width: 100%;
    height: ${pxToRem(900)}rem;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
  `,
  CenterWrapper:styled.div`
    width:1300px;
    height:500px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    @media screen and (max-width:1500px) {
    width:1200px;
      zoom:80%;

    }
    @media screen and (max-width:1300px) {
    width:1000px;
      zoom:80%;

    }
    
    @media screen and (max-width:1100px) {
      zoom:70%;

    }
    @media screen and (max-width:900px) {
      zoom:55%;

    }
    
    @media screen and (max-width:700px) {
      zoom:42%;
      
    }
    @media screen and (max-width:500px) {
      zoom:37%;
      
    }
  `,
  LeftObjectWrapper: styled.div`
  
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    
  `,
  RightObjectWrapper: styled.div`
   
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      transition: 0.3s;
      width: 560px;
    }
    
  `,
  TotalTextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: ${pxToRem(440)}rem;
    height: ${pxToRem(125)}rem;
  `,
  TopTextWrapper: styled.p`
    display: flex;
    flex-direction: row;
  `,
  GoogleText: styled.p`
    > #blue {
      color: #61dafb;
    }
    > #red {
      color: #ff6868;
    }
    > #yellow {
      color: #ffde68;
    }
    > #green {
      color: #2af3b0;
    }
    font-weight: bold;
    font-size: ${pxToRem(45)}rem;
    display: flex;
    flex-direction: row;
    padding-right: ${pxToRem(14)}rem;
  `,
  NormalText: styled.p`
    color: #238d6a;
    font-weight: bold;
    font-size: ${pxToRem(45)}rem;
  `,
  SubText:styled.p`
    font-size:${pxToRem(21)}rem;
    color:#535353;
    margin-top:15px;
  `,
  ButtonToLogin: styled.div`
    width: 330px;
    height: 65px;
    background-color: #26d79c;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-top: 40px;
    cursor: pointer;
    > p {
      font-size: ${pxToRem(30)}rem;
      font-weight: bold;
      color: white;
    }
  `,
};
