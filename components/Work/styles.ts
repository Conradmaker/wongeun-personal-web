import styled from 'styled-components';

export const WorkTitleSection = styled.section`
  height: 100vh;
  .inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .page__title {
      margin-bottom: 200px;
      h1 {
        text-align: center;
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    .inner.page__section {
      padding: 60px 20px;
    }
  }
`;

export const PrimaryWorkContainer = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.background.lighter};
  position: relative;
  .inner {
    z-index: 2;
    height: 100%;
    .content__header {
      margin: 80px 0;
      display: flex;
      justify-content: space-between;
      .page__title {
        span {
          font-family: 'Spoqa Han Sans Neo', sans-serif;
          font-size: 20px;
          font-weight: 300;
          margin-top: 10px;
          color: ${({ theme }) => theme.textColor.lighter};
        }
      }
      .stack {
        display: flex;
        flex-direction: column;
        justify-content: center;
        h3 {
          color: ${({ theme }) => theme.textColor.lighter};
          font-size: 14px;
          margin: 15px 0 2px 0;
        }
        ul {
          display: flex;
          li {
            padding: 0 10px;
            svg {
              width: 25px;
              height: 25px;
            }
          }
        }
      }
    }
    .content__body {
      height: 500px;
      display: flex;
      & > ul {
        flex: 1;
        font-family: 'Spoqa Han Sans Neo', sans-serif;
        & > li {
          padding: 5px 0;
          strong {
            padding: 3px 0;
            display: block;
            font-size: 16px;
            font-weight: 500;
            color: ${({ theme }) => theme.textColor.initial};
          }
          small {
            color: ${({ theme }) => theme.textColor.initial};
            display: block;
            text-indent: 3px;
            font-weight: 300;
            line-height: 1.3;
            font-size: 15px;
          }
          ul {
            display: flex;
            margin-top: 10px;
            li {
              border-bottom: 1px solid ${({ theme }) => theme.textColor.primary};
              margin: 0 20px;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              font-family: 'Montserrat', sans-serif;
              width: 70px;
              height: 40px;
              & > * {
                color: ${({ theme }) => theme.textColor.primary};
                font-size: 14px;
                transition: all 0.3s;
              }
              svg {
                opacity: 0;
                position: absolute;
                font-size: 25px;
              }
              &:hover {
                span {
                  opacity: 0;
                }
                svg {
                  opacity: 1;
                }
              }
            }
          }
        }
      }
      .img__wrapper {
        margin-left: 50px;
        flex: 1.2;
        img {
          width: 100%;
        }
      }
    }
  }

  @media ${({ theme }) => theme.viewPortSize.mobile} {
    .inner.page__section {
      padding: 20px 20px;
      .content__header {
        margin: 30px 0;
        flex-direction: column;

        .page__title {
          h1 {
            font-size: 44px;
          }
          span {
            font-size: 18px;
          }
        }
        .stack {
          h3 {
            margin: 15px 0 5px 0;
          }
          ul > li > svg {
            width: 20px;
            height: 20px;
          }
        }
      }
      .content__body {
        height: auto;
        flex-direction: column;
        & > ul {
          order: 1;
        }
        & > ul > li {
          ul {
            margin-top: 0px;
            justify-content: center;
          }
        }
        .img__wrapper {
          margin: 0 0 20px 0;
          order: 0;
        }
      }
    }
  }
`;

export const EtcListContainer = styled.section`
  background-color: ${({ theme }) => theme.background.lighter};
  min-height: 100vh;
  .inner {
    height: 100%;
    .page__title {
      h2 {
        font-size: 24px;
        font-family: 'Spoqa Han Sans Neo', sans-serif;
        font-weight: 300;
      }
    }
    .project__list {
      margin-top: 50px;
      padding-bottom: 200px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 50px 30px;
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    .inner {
      padding: 30px 20px;
      .page__title {
        h1 {
          font-size: 44px;
          margin-bottom: 5px;
        }
        h2 {
          font-size: 18px;
          text-align: start;
        }
      }
      .project__list {
        margin-top: 50px;
        padding-bottom: 200px;
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;

export const ProjectItemBox = styled.li`
  width: 100%;
  height: 220px;
  background-color: #aaa;
  position: relative;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .item__layer {
    border-radius: 10px;
    cursor: pointer;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.6) 20%,
      rgba(0, 0, 0, 0.1) 40%,
      rgba(0, 0, 0, 0) 100%
    );
    .summary,
    .btn__group {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all 0.3s;
      display: flex;
      flex-direction: column;
      padding: 20px 15px;
      span {
        margin: 5px 0;
      }
    }
    .stack {
      box-shadow: 0px 1px 3px #ddd;
      border-radius: 15px;
      padding: 0 3px;
      position: absolute;
      right: 5px;
      top: -20px;
      height: 35px;
      background: #fff;
      display: flex;
      align-items: center;
      li > svg {
        margin: 5px;
        width: 19px;
        height: 19px;
      }
    }
    .summary {
      justify-content: flex-end;
      align-items: flex-start;
      text-shadow: 0 0 10px #000;
      h4 {
        font-size: 20px;
        margin-bottom: 10px;
      }
      p {
        font-size: 14px;
      }
    }
    .btn__group {
      opacity: 0;
      justify-content: center;
      align-items: center;
      li {
        transform: translateX(100px) scale(0);
        position: relative;
        border-radius: 3px;
        background-color: ${({ theme }) => theme.background.initial};
        border: 1px solid ${({ theme }) => theme.textColor.primary};
        color: ${({ theme }) => theme.textColor.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: all 0.4s;
        width: 125px;
        height: 30px;
        &,
        & > * {
          transition: all 0.3s;
        }
      }
    }
    &:hover {
      .summary {
        opacity: 0;
        transform: translateY(20%);
      }
      .btn__group {
        opacity: 1;

        li + li {
          margin-top: 10px;
        }
        li {
          transform: translateX(0) scale(1);
          width: 125px;
          height: 30px;
          span {
            opacity: 1;
            font-size: 14px;
          }
          svg {
            position: absolute;
            opacity: 0;
          }
          &:hover {
            span {
              opacity: 0;
            }
            svg {
              opacity: 1;
            }
          }
        }
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    height: 250px;
    border-radius: 5px;
    img {
      border-radius: 5px;
    }
    .item__layer {
      border-radius: 5px;
      .stack > li > svg {
        margin: 5px 6px;
      }
    }
  }
`;
