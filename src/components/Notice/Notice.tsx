import { FC } from "react";
import { noticeIcon_img } from "../../assets/Notice";
import List from "./List/List";
import Pagenation from "./Pagenation/Pagenation";
import { S } from "./style";

const Notice: FC = () => {
  return (
    <S.TotalWrapper>
      <S.CenterWrapper>
        <S.HeadWrapper>
          <div style={{ width: "150px" }} />
          <S.TitleWrapper>
            <S.Title>공지사항</S.Title>
            <S.Rowline />
            <S.SubTitle>DSM의 선생님들께서 올리시는 공지사항입니다.</S.SubTitle>
          </S.TitleWrapper>
          <S.WriteButton>
            <S.ButtonContentWrapper>
              <img src={noticeIcon_img} alt="" />
                <p>글쓰기</p>
            </S.ButtonContentWrapper>
          </S.WriteButton>
        </S.HeadWrapper>
        <List />
        <Pagenation />
      </S.CenterWrapper>
    </S.TotalWrapper>
  );
};

export default Notice;
