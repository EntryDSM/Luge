import styled from "styled-components";
import { pxToRem } from "../../../styles";

export const S = {
  TotalWrapper: styled.div`
    width: 100%;
    height: ${pxToRem(800)}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f2f8;
  `,
  CenterWrapper: styled.div`
    width: 1245px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width:1300px) {
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
  TopObjectWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled.p`
    font-weight: lighter;
    font-size: ${pxToRem(40)}rem;
    height: 44px;
    color: #242424;
    
  `,
  SubTitle: styled.p`
    font-weight: lighter;
    font-size: ${pxToRem(25)}rem;
    margin-top: 27px;
    height: 24px;
    color: #494949;
  
  `,
  BottomObjectWrapper: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
  `,
  PartWrapper: styled.div`
    width: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
   
  `,
  PartText: styled.p`
    font-weight: bold;
    font-size: ${pxToRem(30)}rem;
   
  `,
  PartButtonWrapper: styled.div<{
    logo?: any;
    position: string;
    color: string;
  }>`
    width: 270px;
    height: 270px;
    background-color: #dedede;
    margin-top: 20px;
    border-radius: 15px;
    background-image: url(${(props) => props.logo});
    background-repeat: no-repeat;
    background-position: ${(props) => props.position};
    transition: 0.5s;
    cursor: pointer;
    :hover {
      background-color: ${(props) => props.color};
    }

  `,
};
