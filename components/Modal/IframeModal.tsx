import { CloseBtn } from 'components/Button/RoundBtn';
import React from 'react';
import { ModalContainer, IframeModalBox } from './styles';

type IframeModalProps = {
  src: string;
  onClose: () => void;
};
export default function IframeModal({
  onClose = () => null,
  src,
}: IframeModalProps): JSX.Element {
  const onClickBg = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <ModalContainer onClick={onClickBg}>
      <CloseBtn onClick={onClose} />
      <IframeModalBox>
        <iframe title={src + 'title'} src={src}></iframe>
      </IframeModalBox>
    </ModalContainer>
  );
}
