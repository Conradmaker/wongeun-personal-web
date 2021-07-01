import styled from 'styled-components';

export const LayoutContainer = styled.div`
  position: relative;
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
  background-color: inherit;
  transition: 0.3s;
  .inner {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      letter-spacing: 0.5px;
      font-size: 24px;
      font-weight: 600;
      cursor: pointer;
      color: ${({ theme }) => theme.textColor.primary};
    }
    & > ul {
      display: flex;
      font-size: 16px;
      align-items: center;
      & > li {
        color: ${({ theme }) => theme.textColor.primary};
        cursor: pointer;
        margin-right: 20px;
        &:hover {
          text-decoration: underline;
        }
        &.git__link {
          width: 63px;
          justify-content: center;
          display: flex;
          align-items: center;
          svg {
            display: none;
            font-size: 24px;
          }
          &:hover {
            a {
              color: ${({ theme }) => theme.primary[1]};
              text-align: center;
              width: 100%;
              height: 100%;
              svg {
                display: initial;
              }
            }
            span {
              display: none;
            }
          }
        }
      }
      & > li:last-of-type {
        margin-right: 0;
      }
    }
  }
  &.light {
    background-color: ${({ theme }) => theme.background.lighter};
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footer__left {
      .logo {
        color: #fff;
        letter-spacing: 0.5px;
        font-size: 24px;
        font-weight: 600;
        cursor: pointer;
        margin-bottom: 10px;
      }
      span,
      p {
        color: #eee;
        font-family: 'Spoqa Han Sans Neo', sans-serif;
        font-size: 14px;
        font-weight: 300;
      }
      p {
        margin-top: 10px;
      }
    }
    .footer__right {
      font-size: 14px;
      font-weight: 300;
      * {
        color: #eee;
      }
      ul > li {
        padding: 5px 0;
        text-align: right;
        a {
          color: #fff;
          font-weight: bold;
        }
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
    transition: all 0.3s;
  }
  &:hover&::after {
    height: 30px;
    padding: 5px 20px;
    font-size: 20px;
    text-align: end;
    white-space: nowrap;
    color: #fff;
    content: '${({ width }) => Math.floor(width)} %';
  }
`;
