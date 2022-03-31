import styled from "styled-components";

export const S = {
    TotalWrapper:styled.div`
        width:100%;
        height:80px;
        background-color:white;
        position:fixed;
        top:0px;
        left:0px;
        z-index:999;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        border-bottom:1px solid #797979;
        
        
    `,
    LogoWrapper:styled.div`
        width:290px;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:flex-start;
        margin-left:50px;
        transition:0.3s;
        @media screen and (max-width:970px){
            margin-left:15px;
        }

    `,
    Logo:styled.img`
        cursor: pointer;
    `,  
    HeadTextWrapper:styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        width:600px;
        margin:0 50px 0 10px;
        @media screen and (max-width:970px){
            display:none;
        }
        
    `,
    CartegoryText:styled.p`
        font-weight:bold;
        font-family:NanumGothic;
        font-size:22px;
        align-self:center;
        text-align:center;
        cursor: pointer;
        
    `,
    ColumnLine:styled.div`
        border-left:3px solid #D0D0D0;
        height:35px;
        margin:0 25px 0 25px;
    `,
    ProfileIconsWrapper:styled.div`
        width:290px;
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-right:50px;
        transition:0.3s;
        @media screen and (max-width:970px){
            margin-right:15px;
        }
    `,
}