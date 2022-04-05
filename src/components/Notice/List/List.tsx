import { FC } from "react";
import { S } from "./style";

interface ListObjectProps {
  title: string;
  posted_date: string;
}
const EachListObject: FC<ListObjectProps> = ({ title, posted_date }) => {
  return (
    <S.ObjectWrapper>
      <p id="title">{title}</p>
      <p id="date">{posted_date}</p>
    </S.ObjectWrapper>
  );
};

const List: FC = () => {
  return (
    <S.TotalWrapper>
      <S.Header>
        <S.HeaderText>제목</S.HeaderText>
        <S.HeaderText>작성일</S.HeaderText>
      </S.Header>
      <S.BodyWrapper>
        {
          <>
            <EachListObject title="제목" posted_date="1023-12-12" />
            <EachListObject title="제목" posted_date="1023-12-12" />
            <EachListObject title="제목" posted_date="1023-12-12" />
            <EachListObject title="제목" posted_date="1023-12-12" />
            <EachListObject title="제목" posted_date="1023-12-12" />
            <EachListObject title="제목" posted_date="1023-12-12" />
            <EachListObject title="제목" posted_date="1023-12-12" />
          </>
        }
      </S.BodyWrapper>
    </S.TotalWrapper>
  );
};

export default List;
