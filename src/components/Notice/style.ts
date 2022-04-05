import styled from "styled-components";
import { pxToRem } from "../../styles";

export const S = {
  TotalWrapper: styled.div`
    width: 100%;
    overflow-y:hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  CenterWrapper: styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items:center;
  `,
  HeadWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-top:120px;
  `,
  TitleWrapper: styled.div`
    width: 500px;
    height: 150px;
    display:flex;
    flex-direction:column;
    align-items:center;
  `,
  Title: styled.p`
    font-size: ${pxToRem(42)}rem;
    color: #242424;
    line-height:40px;
  `,
  Rowline: styled.div`
    width: 60px;
    height: 3px;
    background-color: #2af3b0;
    margin-top:40px;
    margin-bottom:40px;
  `,
  SubTitle: styled.p`
    font-size:${pxToRem(23)}rem;
    color:#676767;
    line-height:21px;
  `,
  WriteButton:styled.div`
    border:2px solid #1DC18B;
    border-radius:5px;
    width:150px;
    height:60px;
    display:flex;
    align-items:center;
    justify-content:center;
  `,
  ButtonContentWrapper:styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:85px;
    >img{

    }
    >p{
        color:#1DC18B;
        font-size:${pxToRem(20)}rem;
        font-weight:bold;

    }
    
  `,
  
};
