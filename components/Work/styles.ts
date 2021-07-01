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
    .thumnail__list {
      position: absolute;
      bottom: 0;
      width: 100%;
      margin: 0 auto;
      height: 200px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      li {
        width: 100%;
        height: 100%;
        position: relative;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #eee;
          font-size: 20px;
          text-decoration: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          content: '';
          opacity: 0;
          background-color: ${({ theme }) => theme.layerColor.imageLayer};
        }
        &:hover {
          a {
            content: '';
            opacity: 1;
          }
        }
      }
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
            font-size: 18px;
            font-weight: 500;
          }
          small {
            display: block;
            text-indent: 3px;
            font-weight: 300;
          }
          ul {
            display: flex;
            margin-top: 10px;
            li {
              border-bottom: 1px solid ${({ theme }) => theme.primary[1]};
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
                color: ${({ theme }) => theme.primary[1]};
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
`;

export const ProjectItemBox = styled.li`
  width: 100%;
  height: 220px;
  background-color: #aaa;
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item__layer {
    cursor: pointer;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.layerColor.imageLayer};
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
      display: flex;
      position: absolute;
      top: 5px;
      right: 5px;
      li > svg {
        margin: 5px;
        width: 20px;
        height: 20px;
      }
    }
    .summary {
      justify-content: flex-end;
      align-items: flex-start;
      text-shadow: 0 0 10px #222;
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
      transform: translateX(30%);
    }
    &:hover {
      .summary {
        opacity: 0;
        transform: translateY(30%);
      }
      .btn__group {
        opacity: 1;
        transform: translateX(0);
        li + li {
          margin-top: 10px;
        }
        li {
          position: relative;
          border-radius: 3px;
          background-color: ${({ theme }) => theme.background.lighter};
          border: 1px solid ${({ theme }) => theme.primary[1]};
          color: ${({ theme }) => theme.primary[1]};
          display: flex;
          align-items: center;
          justify-content: center;
          width: 125px;
          height: 30px;
          &,
          & > * {
            transition: all 0.3s;
          }
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
`;
