import React, { useState } from 'react';
import * as S from './style';


interface PopupProps {
  onClose: () => void;
  onSubmit: (reason: string) => void;
}

const Popup = ({ onClose, onSubmit }: PopupProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleOkClick = () => {
    onSubmit(inputValue); // 입력값 처리
    onClose(); // 팝업 닫기
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      onSubmit(inputValue); // 입력값 처리
      onClose(); // 팝업 닫기
    }
  }

  return (
    <S.PopupBox>
      <S.CloseButton onClick={onClose}>X</S.CloseButton>
      <S.InputText autoFocus type="text" placeholder='이유를 입력하시오!' value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} />
      <S.OkButton onClick={handleOkClick}>OK</S.OkButton>
    </S.PopupBox>
  );
};

export default Popup;
