import styled, { css, keyframes } from 'styled-components';

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
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: ${({ theme }) => theme.layerColor.modalLayer};
  animation: ${fadeIn} 0.4s ease-in-out;
  .btn__group {
    z-index: 99;
    display: flex;
    align-items: center;
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 30px;
    background-color: #fff;
    & > div {
      transition: 0.3s;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      border-radius: 30px;
      padding: 6px;
      &:hover {
        background-color: ${({ theme }) => theme.textColor.lighter};
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    .btn__group {
      display: none;
    }
  }
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

export const IframeModalBox = styled(ModalBox)<{ fullMode: boolean }>`
  width: 1000px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  & > iframe {
    background-color: #fff;
    width: 100%;
    height: 100%;
  }
  ${({ fullMode }) =>
    fullMode &&
    css`
      min-width: auto;
      max-width: 1500px;
      width: 100%;
    `}
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
