import React from 'react';
import * as S from './style'

interface TitleProps {
  text?: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: TitleProps) => {

  return (
    <S.Button style={{color: "#A435F0"}} onClick={onClick}>
      <span className="label">{text}</span>
    </S.Button>
  )
};

export default Button;
