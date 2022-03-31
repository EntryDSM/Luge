import { FC } from "react";
import { part1_logo, part2_logo, part3_logo, part4_logo } from "../../../assets/Main";
import { S } from "./style";

interface PartProps{
    name:string;
    src:any;
    position:string;
    color:string;
}

const EachPart: FC<PartProps> = ({name,src,position,color}) => {
  return (
    <S.PartWrapper>
      <S.PartText>{name}</S.PartText>
      <S.PartButtonWrapper logo={src} position={position} color={color}></S.PartButtonWrapper>
    </S.PartWrapper>
  );
};

const MainSecond: FC = () => {
  return (
    <S.TotalWrapper>
      <S.CenterWrapper>
        <S.TopObjectWrapper>
          <S.Title>분야별 이력서 보기.</S.Title>
          <S.SubTitle>
            DSM학생들의 이력서를 분야별로 나누어 읽어보세요!
          </S.SubTitle>
        </S.TopObjectWrapper>
        <S.BottomObjectWrapper>
        <EachPart name="Front End" src={part1_logo} position={"bottom right"} color="#61DAFB" />
        <EachPart name="Back End" src={part2_logo} position={"bottom left"} color="#2AF3B0" />
        <EachPart name="Android" src={part3_logo} position={"bottom right"} color="#FFDE68" />
        <EachPart name="IOS" src={part4_logo} position={"bottom left"} color="#FF6868" />

        </S.BottomObjectWrapper>
      </S.CenterWrapper>
    </S.TotalWrapper>
  );
};

export default MainSecond;
