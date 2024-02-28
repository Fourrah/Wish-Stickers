import * as S from './style'

interface TitleProps {
  text?: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <S.TitleBox>
      <span className="label">{text}</span>
    </S.TitleBox>
  );
};

export default Title;
