import { FC } from "react";
import { main4_img } from "../../../assets/Main";
import { S } from "./style";

interface Props {}

const MainLast: FC<Props> = () => {
  return (
    <S.TotalWrapper>
      <S.CenterWrapper>
        <S.LogoImg src={main4_img} />
        <S.TotalTextWrapper>
          <S.Title>
            이력서 & 포트폴리오를
            <br />
            온라인으로 작성해 보세요.
          </S.Title>
          <S.SubTitle>
            이력서 & 포트폴리오를 Raise%에서 <br />
            온라인으로 편안하게 작성해보세요, <br />수많은 기업이 당신이
            올린 글을 볼 겁니다.
          </S.SubTitle>
        </S.TotalTextWrapper>
      </S.CenterWrapper>
    </S.TotalWrapper>
  );
};

export default MainLast;
