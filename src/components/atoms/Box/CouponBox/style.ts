import styled from 'styled-components';

export const CouponBox = styled.div`
  width: 500px;
  min-height: 150px;
  max-height: 500px;
  background-color: #9575CD; 
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top:30px;
  margin-bottom: 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%
  padding: 0 20px;
`

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  padding: 10px;
`

export const StickerImage = styled.div`
 width: 30px;
 height: 30px;
 background-image: url('/assets/images/sticker.png');
 background-size: cover;
 margin-right: 15px;
 margin-top: 10px;
`

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 10px 10px 0;
`

export const PlusButton = styled.div`
  width: 24px;
  height: 24px;
  background-image: url('/assets/images/plus-circle.png');
  background-size: cover;
  margin-right: 5px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  cursor: pointer; 
`;