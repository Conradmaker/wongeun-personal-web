import styled, { css } from 'styled-components';

const RoundBtnBox = styled.button`
  outline: none;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ToggleThemeBtnBox = styled(RoundBtnBox)<{ currentTheme: 'light' | 'dark' }>`
  width: 28px;
  height: 28px;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.primary[1]};
  background-color: ${({ theme }) => theme.primary[1]};
  transition: all 0.3s;
  svg {
    width: 16px;
    height: 16px;
    color: #fff;
  }
  ${({ currentTheme }) =>
    currentTheme === 'dark' &&
    css`
      background-color: #fff;
      svg {
        fill: #cec716;
      }
    `}

  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 100%;
    height: 40px;
  }
`;

export const ScrollDownBtnBox = styled.div`
  width: 150px;
  text-align: center;
  font-size: 28px;
  color: ${({ theme }) => theme.textColor.initial};
  p {
    font-size: 18px;
  }
  svg {
    font-size: 35px;
    animation: upDown 0.7s ease-in-out alternate infinite;
    @keyframes upDown {
      from {
        transform: translateY(8px);
      }
    }
  }
`;

export const CloseBtnBox = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  color: #fff;
  position: absolute;
  font-size: 20px;
  top: 50%;
  right: 1100px;
  transform: translateX(50%);
  border-bottom: 1px solid #fff;
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    top: 2%;
    right: 15%;
    font-size: 16px;
  }
`;

export const ScrollTopBtnBox = styled.div<{ visible: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  bottom: 40px;
  right: 30px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.textColor.primary};
  color: #eee;
  transition: all 0.4s;
  z-index: 101;
  opacity: 0;
  i {
    width: 40px;
    height: 40px;
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    transition: all 0.4s;
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
    flex: 1;
    font-size: 14px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.background.lighter};
    border: 2px solid ${({ theme }) => theme.textColor.primary};
    width: 130px;
    color: ${({ theme }) => theme.textColor.primary};
    p {
      opacity: 1;
    }
  }
  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
    `}
`;
