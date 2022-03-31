import { FC } from "react";
import { main2_img } from "../../../assets/Main";
import { S } from "./style";

interface Props {}

const MainThird: FC<Props> = () => {
  return (
    <S.TotalWrapper>
      <S.CenterWrapper>
        <S.LogoImg src={main2_img} />
        <S.TotalTextWrapper>
          <S.Title>
            이제 책으로 읽는
            <br /> 레주메북은 그만 보세요.
          </S.Title>
          <S.SubTitle>
            이제부터는 저희 Raise%에서
            <br />
            온라인으로 잘 정리된 DSM 학생들의
            <br />
            이력서 & 포트폴리오를 만나보세요.
          </S.SubTitle>
        </S.TotalTextWrapper>
      </S.CenterWrapper>
    </S.TotalWrapper>
  );
};

export default MainThird;
