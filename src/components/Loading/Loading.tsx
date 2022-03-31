import { FC } from "react";
import { S } from "./style";


const Loading:FC = () => {


    return(
        <S.TotalWrapper>
            <S.LoadingBarWrapper>
                <S.Loadingbox />
            </S.LoadingBarWrapper>
            <p>Loading...</p>
        </S.TotalWrapper>
    )
}

export default Loading;