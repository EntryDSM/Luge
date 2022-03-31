import { FC } from "react";
import { logo_img } from "../../assets/Header";
import Icons from "./Icons/Icons";
import Profile from "./Profile/Profile";
import { S } from "./style";

interface Props{
    isVerified?:boolean
}

const Header:FC<Props> = ({isVerified}) => {
  return (
    <S.TotalWrapper>
      <S.LogoWrapper>
        <S.Logo src={logo_img} />
      </S.LogoWrapper>
      <S.HeadTextWrapper>
        <S.CartegoryText>포트폴리오</S.CartegoryText>
        <S.CartegoryText>공지사항</S.CartegoryText>
        <S.CartegoryText>이력서</S.CartegoryText>
      </S.HeadTextWrapper>
      <S.ProfileIconsWrapper>
          {
              isVerified &&
              <>
                <Icons />
                <S.ColumnLine />
                <Profile />
              </>
          }
      </S.ProfileIconsWrapper>
    </S.TotalWrapper>
  );
}

export default Header;
