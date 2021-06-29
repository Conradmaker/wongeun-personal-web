import React from 'react';
import { ModalContainer, MoreSkillModalBox } from './styles';
import skillDetailsData from 'data/skillDetailData';
import { CloseBtn } from 'components/Button/RoundBtn';

type MoreSkillModalProps = {
  currentMoreInfo: 'front' | 'back' | 'etc';
  onClose: () => void;
};
export default function MoreSkillModal({
  currentMoreInfo,
  onClose = () => null,
}: MoreSkillModalProps): JSX.Element {
  const data = skillDetailsData[currentMoreInfo];

  const onClickBg = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <ModalContainer onClick={onClickBg}>
      <CloseBtn onClick={onClose} />
      <MoreSkillModalBox>
        <h3>{data.name}</h3>
        <p>{data.content}</p>
        <ul>
          {data.info.map(stack => (
            <li>
              <h4>{stack.title}</h4>
              <p>{stack.content}</p>
            </li>
          ))}
        </ul>
      </MoreSkillModalBox>
    </ModalContainer>
  );
}
