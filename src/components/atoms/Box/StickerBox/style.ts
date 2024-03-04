import styled from 'styled-components';

export const StickerBox = styled.div`
  width: 500px;
  // height: 700px;
  min-height: 150px;
  max-height: 700px;
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
  flex-direction: column;
  gap: 10px;
  margin-left: 20px;
`

export const StickerSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;


export const StickerImage = styled.div`
 width: 30px;
 height: 30px;
 background-image: url('/assets/images/sticker.png');
 background-size: cover;
 margin-right: 15px;
 margin-top: 10px;
`

export const ReasonSection = styled.div`
  width: 400px;
  height: 30px;
  background-color: #D1C4E9;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
`;

export const ReasonText = styled.span`
  font-size: 14px; 
  color: #333;
  font-weight: 500;
`;

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