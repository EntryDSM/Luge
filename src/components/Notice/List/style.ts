import styled from "styled-components";
import { pxToRem } from "../../../styles";

export const S = {
  TotalWrapper: styled.div`
    margin-top: 50px;
    width: 100%;
    height: fit-content;
  `,
  Header: styled.div`
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 5px solid #1dc18b;
  `,
  HeaderText: styled.p`
    color: #26d79c;
    font-size: ${pxToRem(30)}rem;
    font-weight: bold;
    margin: 0 60px 0 60px;
  `,
  BodyWrapper: styled.div`
    width: 100%;
    height: fit-content;
  `,
  ObjectWrapper: styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #d7d7d7;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    > p {
      margin: 0 60px 0 60px;
    }
    > #title {
      color: #242424;
      font-size: ${pxToRem(25)}rem;
      line-height: 25px;
      font-weight: bold;
    }
    > #date {
      color: #676767;
      line-height: 15pc;
      font-size: ${pxToRem(20)}rem;
    }
  `,
};
