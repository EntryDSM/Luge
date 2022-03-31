import { FC } from "react";
import { alarm_img, bookmark_img } from "../../../assets/Header";
import { S } from "./style";

interface Props{

}
const Icons:FC<Props> = ({}) => {

    return(
        <S.TotalWrapper>
            <S.EachIconWrapper>
                <img src={bookmark_img} alt="" />
            </S.EachIconWrapper>
            <S.EachIconWrapper>
                <img src={alarm_img} alt="" />
            </S.EachIconWrapper>
        </S.TotalWrapper>
    )
}

export default Icons;