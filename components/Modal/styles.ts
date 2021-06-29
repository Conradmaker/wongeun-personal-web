import styled, { keyframes } from 'styled-components';

const slideLeft = keyframes`
    from{
        transform:translateX(1200px)
    }
    to{
        transform:translateX(0)
    }
`;
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background-color: ${({ theme }) => theme.layerColor.modalLayer};
`;

const ModalBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  min-width: 300px;
  max-width: 1200px;
  background-color: ${({ theme }) => theme.background.lighter};
  box-shadow: 0 0 10px #000;
  animation: ${slideLeft} 0.4s ease-in-out;
`;

export const MoreSkillModalBox = styled(ModalBox)`
  width: 1200px;
`;

export const IframeModalBox = styled(ModalBox)`
  width: 1200px;
  iframe {
    width: 100%;
    height: 100%;
  }
`;
