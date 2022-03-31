import { FC } from "react";
import { defprofile_img } from "../../../assets/Header";
import { S } from "./style";

interface Props {
  image_src?: string;
  name?: string;
}

const Profile: FC<Props> = ({ image_src, name }) => {
  return (
    <S.TotalWrapper>
      <S.ProfileImgWrapper>
        <img src={image_src ? image_src : defprofile_img} alt="" />
      </S.ProfileImgWrapper>
      <S.ProfileName>{"이경수"}</S.ProfileName>
    </S.TotalWrapper>
  );
};

export default Profile;
