import { FC } from "react";
import MainFirst from "./MainFirst/MainFirst";
import MainFourth from "./MainFourth/MainFourth";
import MainLast from "./MainLast/MainLast";
import MainSecond from "./MainSecond/MainSecond";
import MainThird from "./MainThird/MainThird";
import { S } from "./style";

const Main:FC = () => {


    return(
        <S.TotalWrapper>
            <MainFirst />
            <MainSecond /> {/* Icons */}
            <MainThird />
            <MainFourth />
            <MainLast />
        </S.TotalWrapper>
    )
}

export default Main;