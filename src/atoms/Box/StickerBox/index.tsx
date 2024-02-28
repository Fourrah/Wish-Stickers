import { useState } from 'react';
import { Button, SubTitle } from '../../index'
import * as S from './style'

interface StickerBoxProps {
  text: string;
}

const StickerBox = ({ text }: StickerBoxProps) => {


  const [stickerImages, setStickerImages] = useState<number[]>([]);

  const handlePlusButtonClick = () => {
    if (stickerImages.length < 10) {
      setStickerImages(prev => [...prev, prev.length + 1]); // 배열에 새 요소 추가
    }
  };

  const handleClearButtonClick = () => {
    setStickerImages([]);
  }


  return (
    <S.StickerBox>
      <S.Header>
        <SubTitle text={text}/>
        <Button text="clear" onClick={handleClearButtonClick}/>
      </S.Header>
      <S.Content>
        {stickerImages.map((_, index) => (
          <S.StickerImage key={index} />
        ))}
      </S.Content>
      <S.Bottom>
        <S.PlusButton onClick={handlePlusButtonClick}/>
      </S.Bottom>
    </S.StickerBox>
  )
}

export default StickerBox;