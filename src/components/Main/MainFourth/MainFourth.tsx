import { FC } from "react";
import { main3_img } from "../../../assets/Main";
import { S } from "./style";

interface Props {}

const MainFourth: FC<Props> = () => {
  return (
    <S.TotalWrapper>
      <S.CenterWrapper>
        <S.TotalTextWrapper>
          <S.Title>
            원하시는 이력서를
            <br />
            북마크 해보세요!
          </S.Title>
          <S.SubTitle>
          원하시는 DSM학생의 이력서 & 포트폴리오<br />
를 북마크하여 편안하게 이력서를 읽어보세요. 
          </S.SubTitle>
        </S.TotalTextWrapper>
        <S.LogoImg src={main3_img} />
      </S.CenterWrapper>
    </S.TotalWrapper>
  );
};

export default MainFourth;
