import { useState } from 'react';
import { Button, SubTitle, Popup } from '../../index';
import * as S from './style';
import React from 'react';

interface StickerBoxProps {
  text: string;
}

interface Sticker {
  id: number;
  reason: string;
}

const StickerBox = ({ text }: StickerBoxProps) => {
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [showPopup, setShowPopup] = useState(false); // 팝업 표시 여부를 위한 상태

  // 팝업 토글 함수
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // 스티커 추가 함수
  const handleAddSticker = (reason: string) => {
    if (stickers.length < 10) {
      const newSticker: Sticker = {
        id: stickers.length + 1,
        reason,
      };
      setStickers((prev) => [...prev, newSticker]);
    }
    togglePopup(); // 스티커 추가 후 팝업 닫기
  };

  const handleClearButtonClick = () => {
    setStickers([]);
  };

  return (
    <S.StickerBox>
      <S.Header>
        <SubTitle text={text}/>
        <Button text="clear" onClick={handleClearButtonClick}/>
      </S.Header>
      <S.Content>
        {stickers.map((sticker) => (
          <React.Fragment key={sticker.id}>
            <S.StickerSection>
              <S.StickerImage />
              <S.ReasonSection>
                <S.ReasonText>{sticker.reason}</S.ReasonText>
              </S.ReasonSection>
            </S.StickerSection>
          </React.Fragment>
        ))}
      </S.Content>
      <S.Bottom>
        <S.PlusButton onClick={togglePopup} />
      </S.Bottom>
      {showPopup && <Popup onClose={togglePopup} onSubmit={handleAddSticker} />}
    </S.StickerBox>
  );
};

export default StickerBox;
