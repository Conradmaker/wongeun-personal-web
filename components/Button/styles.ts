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
`;

export const ScrollDownBtnBox = styled.div`
  width: 150px;
  text-align: center;
  font-size: 28px;
  p {
    font-size: 18px;
  }
  svg {
    animation: upDown 0.7s ease-in-out alternate infinite;
    @keyframes upDown {
      from {
        transform: translateY(5px);
      }
    }
  }
`;
