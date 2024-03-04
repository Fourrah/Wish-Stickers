import { CouponBox } from '../../atoms';
import * as S from './style'
const CouponContainer = () => {


  return (
    <S.CouponWrapper>
      <CouponBox/>
      <CouponBox/>
    </S.CouponWrapper>
  )
}

export default CouponContainer;