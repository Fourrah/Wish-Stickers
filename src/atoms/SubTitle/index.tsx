import * as S from './style'

interface TitleProps {
  text?: string;
}

const SubTitle = ({ text }: TitleProps) => {
  return (
    <S.SubTitle>
      <span className="label">{text}</span>
    </S.SubTitle>
  );
};

export default SubTitle;
