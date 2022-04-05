import React, { FC } from "react";
import { getCurrentPages, getIndexList } from "../../../utils/pagenation";
import { S } from "./style";

interface ButtonProps {
  value?: string | number;
  currentValue?: number;
  onClick?: () => void;
}

interface PagenationProps {
  notice_length?: number;
}

const EachButton: FC<ButtonProps> = ({ value, currentValue, onClick }) => {
  return (
    <S.EachButtonWrapper
      style={
        currentValue === value
          ? { color: "white", backgroundColor: "#26d79c" }
          : {}
      }
      onClick={onClick}
    >
      {value}
    </S.EachButtonWrapper>
  );
};

const Pagenation: FC<PagenationProps> = ({ notice_length = 210 }) => {
  const [currentPageIndex, setPageIndex] = React.useState<number>(1);
  const [indexList, setIndexList] = React.useState<number[]>([]);
  React.useEffect(() => {
    setIndexList(getIndexList(notice_length));
  }, []);

  const movPage = async (index: number) => {
    await setPageIndex(index);
  };

  const movPagePrev = async () => {
    let maxIndex = Math.ceil(currentPageIndex / 10) * 10;
    let minIndex = Math.floor((currentPageIndex - 1) / 10) * 10;
    console.log(minIndex);
    if (minIndex > 0) {
      await setPageIndex(minIndex);
    }
  };

  const movPageNext = async () => {
    let maxIndex = Math.ceil(currentPageIndex / 10) * 10;
    let minIndex = Math.floor((currentPageIndex - 1) / 10) * 10;
    console.log(maxIndex + 1);
    if (maxIndex + 1 <= notice_length / 10) {
      await setPageIndex(maxIndex + 1);
    }
  };

  return (
    <S.TotalWrapper>
      <EachButton
        value={"<"}
        onClick={() => {
          movPagePrev();
        }}
      />
      {indexList.map((value) =>
        getCurrentPages(currentPageIndex, value) ? ( //나머지가 없고 getCurrentPages 범위 내에 있는가?
          <>
            <EachButton
              value={value}
              onClick={() => {
                movPage(value);
              }}
              currentValue={currentPageIndex}
            />
          </>
        ) : (
          <></>
        )
      )}
      <EachButton
        value={"〉"}
        onClick={() => {
          movPageNext();
        }}
      />
    </S.TotalWrapper>
  );
};

export default Pagenation;
