import styled from "styled-components";
import { pxToRem } from "../../../styles";

export const S = {
    TotalWrapper:styled.div`
        width:100%;
        height:800px;
        background-color:white;
        display:flex;
        align-items:center;
        justify-content:center;

    `,
    CenterWrapper:styled.div`
        width:1204px;
        height:370px;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        @media screen and (max-width:1400px) {
            zoom:80%;
        }
        @media screen and (max-width:1200px) {
            zoom:80%;
        }
        @media screen and (max-width:1100px) {
            zoom:65%;
        }
        @media screen and (max-width:900px) {
            zoom:50%;
        }
        @media screen and (max-width:700px) {
            zoom:35%;
        }
    `,
    LogoImg:styled.img`

    `,
    TotalTextWrapper:styled.div`
        height:100%;
        width:${pxToRem(450)}rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    `,
    Title:styled.p`
        font-size:${pxToRem(40)}rem;
        line-height:${pxToRem(55)}rem;

        font-weight:bolder;
        color:#3A3A3F;
    `,
    SubTitle:styled.p`
        font-size:${pxToRem(26)}rem;
        color:#858585;
        line-height:${pxToRem(37)}rem;
        margin-top:${pxToRem(20)}rem;
    `,
}