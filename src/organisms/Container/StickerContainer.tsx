import { StickerBox } from "../../atoms";
import * as S from './style'

const StickerContainer = () => {
  return (
    <S.StickWrapper>
      <StickerBox text="Will"/>
      <StickerBox text="Sara"/>
    </S.StickWrapper>
    
  )
}

export default StickerContainer;