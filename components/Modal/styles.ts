import styled, { keyframes } from 'styled-components';

const slideLeft = keyframes`
    from{
        transform:translateX(800px);
        opacity: 0;
    }
    to{
        transform:translateX(0);
        opacity: 1;
    }
`;
const slideUp = keyframes`
    from{
        opacity: 0;
        transform:translateY(500px);
    }
    to{
        opacity: 1;
        transform:translateY(0);
    }
`;
const fadeIn = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
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
  animation: ${fadeIn} 0.4s ease-in-out;
`;

const ModalBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  min-width: 300px;
  max-width: 1200px;
  background-color: ${({ theme }) => theme.background.lighter};
  box-shadow: 0 0 20px #000;
  animation: ${slideLeft} 0.5s ease-in-out;
`;

export const MoreSkillModalBox = styled(ModalBox)`
  width: 1000px;
`;

export const IframeModalBox = styled(ModalBox)`
  width: 1000px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;
  iframe {
    background-color: #fff;
    width: 100%;
    height: 100%;
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 100vw;
    height: 93%;
    top: auto;
    bottom: 0;
    border-bottom-left-radius: 0px;
    animation: ${slideUp} 0.4s ease-in-out;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;
