import styled, { css } from 'styled-components';

export const PageTitleBox = styled.article<{ width?: number; height?: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  & > p {
    color: ${({ theme }) => theme.textColor.warm};
    font-weight: 500;
    font-size: 24px;
  }
  & > h1 {
    color: ${({ theme }) => theme.textColor.warm};
    font-size: 96px;
    font-weight: 800;
    em {
      -webkit-text-stroke: 1.5px ${({ theme }) => theme.textColor.primary};
      color: rgba(0, 0, 0, 0);
    }
  }
  & > h2 {
    text-align: end;
    color: ${({ theme }) => theme.textColor.lighter};
    font-size: 28px;
  }
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}
`;

export const SideTitleBox = styled.div`
  position: absolute;
  height: 36px;
  width: 30px;
  top: 230px;
  left: -20px;
  transform: rotate(-90deg);
  color: ${({ theme }) => theme.textColor.initial};
  h2 {
    text-indent: 30px;
    border-left: 4px solid ${({ theme }) => theme.textColor.primary};
    font-size: 36px;
    display: flex;
  }
`;
