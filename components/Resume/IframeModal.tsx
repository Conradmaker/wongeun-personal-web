import React, { useState } from 'react';
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import { ModalContainer, IframeModalBox } from './styles';

type IframeModalProps = {
  src: string;
  onClose: () => void;
};
export default function IframeModal({
  onClose = () => null,
  src,
}: IframeModalProps): JSX.Element {
  const [fullMode, setFullMode] = useState(true);
  const onClickBg = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <ModalContainer onClick={onClickBg}>
      <div className="close__btn" onClick={onClose}>
        CLOSE
      </div>
      <div className="btn__group">
        <div className="btn__round" onClick={onClose}>
          <CgClose />
        </div>
        <div className="btn__round" onClick={() => setFullMode(prev => !prev)}>
          {fullMode ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />}
        </div>
      </div>
      <IframeModalBox fullMode={fullMode}>
        <iframe title={src + 'title'} src={src}></iframe>
      </IframeModalBox>
    </ModalContainer>
  );
}
