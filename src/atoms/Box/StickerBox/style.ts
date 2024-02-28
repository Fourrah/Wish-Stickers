import styled from 'styled-components';

export const StickerBox = styled.div`
  width: 500px;
  height: 125px; 
  background-color: #EDE7F6; 
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%
  padding: 0 20px;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap; 
  margin-top: 5px;
  margin-left: 20px;
`

export const StickerImage = styled.div`
 width: 30px;
 height: 30px;
 background-image: url('/assets/images/sticker.png');
 background-size: cover;
 margin-right: 15px;
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
`;