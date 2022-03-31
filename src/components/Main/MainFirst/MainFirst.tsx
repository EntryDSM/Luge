import { FC } from "react";
import { main1_img } from "../../../assets/Main";
import { S } from "./style";
interface Props {
  isVerified?: boolean;
}
const MainFirst: FC<Props> = ({ isVerified }) => {
  return (
    <S.TotalWrapper>
      <S.CenterWrapper>
        {!isVerified ? (
          <>
            <S.LeftObjectWrapper>
              <S.TotalTextWrapper>
                <S.TopTextWrapper>
                  <S.GoogleText>
                    <p id="blue">G</p>
                    <p id="red">o</p>
                    <p id="yellow">o</p>
                    <p id="blue">g</p>
                    <p id="green">l</p>
                    <p id="red">e</p>
                  </S.GoogleText>
                  <S.NormalText>Auth로</S.NormalText>
                </S.TopTextWrapper>
                <S.NormalText>로그인하기</S.NormalText>
              </S.TotalTextWrapper>
              <S.ButtonToLogin>
                <p>로그인</p>
              </S.ButtonToLogin>
            </S.LeftObjectWrapper>
          </>
        ) : (
          <>
            <S.LeftObjectWrapper>
              <S.TotalTextWrapper>
                <S.TopTextWrapper>
                  <S.NormalText>이력서 & 포트폴리오</S.NormalText>
                </S.TopTextWrapper>
                <S.NormalText>읽으러 가기</S.NormalText>
              </S.TotalTextWrapper>
              <S.SubText>
                대덕소프트웨어마이스터고등학교 학생들의
                <br />
                이력서 & 포트폴리오를 확인해보세요
              </S.SubText>
              <S.ButtonToLogin>
                <p>보러가기</p>
              </S.ButtonToLogin>
            </S.LeftObjectWrapper>
          </>
        )}
        <S.RightObjectWrapper>
          <img src={main1_img} alt="" />
        </S.RightObjectWrapper>
      </S.CenterWrapper>
    </S.TotalWrapper>
  );
};

export default MainFirst;
