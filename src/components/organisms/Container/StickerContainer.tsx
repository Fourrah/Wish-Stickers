import { StickerBox } from "../../atoms";
import * as S from './style'

const StickerContainer = () => {
  return (
    <S.StickerWrapper>
      <StickerBox text="Will"/>
      <StickerBox text="Sara"/>
    </S.StickerWrapper>
    
  )
}

export default StickerContainer;