import styled from 'styled-components';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.background.initial};
  transition: background-color 0.3s ease-in-out;
`;

export const HeaderContainer = styled.header`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  .inner {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.primary[1]};
    .logo {
      letter-spacing: 0.5px;
      font-size: 24px;
      font-weight: 600;
      cursor: pointer;
    }
    & > ul {
      display: flex;
      font-size: 16px;
      align-items: center;
      & > li {
        cursor: pointer;
        margin-right: 20px;
        &:hover {
          text-decoration: underline;
        }
      }
      & > li:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.primary[1]};
  .inner {
    height: 120px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footer__left {
      .logo {
        letter-spacing: 0.5px;
        font-size: 24px;
        font-weight: 600;
        cursor: pointer;
        margin-bottom: 10px;
      }
      span {
        font-family: 'Spoqa Han Sans Neo', sans-serif;
        font-size: 14px;
        font-weight: 300;
      }
    }
    .footer__right {
      font-size: 14px;
      font-weight: 300;
      ul > li {
        padding: 5px 0;
        text-align: right;
      }
    }
  }
`;

export const ScrollBar = styled.div<{ width: number }>`
  position: fixed;
  width: 100vw;
  z-index: 99;
  left: 0;
  bottom: 0;
  &::after {
    transition: width 0.4s ease-in-out;
    content: '';
    display: block;
    height: 8px;
    background-color: ${({ theme }) => theme.primary[1]};
    width: ${({ width }) => width}%;
  }
`;
