import { useState } from 'react';
import Button from '../../Button';
import SubTitle from '../../SubTitle';
import * as S from './style'

const CouponBox = () => {
  const [coupons, setCoupons] = useState<number[]>([]);

  const handlePlusButtonClick = () => {
    setCoupons(prevCoupons => [...prevCoupons, prevCoupons.length + 1]);
  };

  const handleDeleteButtonClick = () => {
    setCoupons(prevCoupons => prevCoupons.slice(0, -1));
  }

  return (
    <S.CouponBox>
      <S.Header>
        <SubTitle text='소원권'/>
        <Button text="delete" onClick={handleDeleteButtonClick}/>
      </S.Header>
      <S.Content>
        {coupons.map((coupon, index) => (
          <S.StickerImage key={index} />
        ))}
      </S.Content>
      <S.Bottom>
        <S.PlusButton onClick={handlePlusButtonClick} />
      </S.Bottom>
    </S.CouponBox>
  )

}

export default CouponBox;