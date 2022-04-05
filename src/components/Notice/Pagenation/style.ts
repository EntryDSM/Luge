import styled from "styled-components";
import { pxToRem } from "../../../styles";

export const S = {
  TotalWrapper: styled.div`
    height: 45px;
    width: 780px;
    margin: 78px 0 78px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  EachButtonWrapper: styled.div`
    border: 2px solid #26d79c;
    border-radius: 50px;
    width: 45px;
    height: 45px;
    font-weight: bold;
    font-size: ${pxToRem(25)}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #26d79c;
    margin: 0 10px 0 10px;
    transition: 0.3s;
    :hover {
      transition: 0.3s;
      color: white;
      background-color: #26d79c;
      
    }
    > p {
      line-height: ${pxToRem(20)}rem;
    }
  `,
};
