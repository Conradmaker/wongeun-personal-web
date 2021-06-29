import styled from 'styled-components';

export const MainTitleContainer = styled.div`
  height: 100vh;
  .inner {
    height: 60%;
    transform: translateY(35%);
    display: flex;
    align-items: flex-end;
    & > div {
      flex: 1;
    }
  }
`;
export const ProfileContainer = styled.div`
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.background.lighter};
  height: 100vh;
  .inner {
    height: 100%;
    display: flex;
    align-items: center;
    article {
      padding-left: 30px;
      flex: 1;
    }
    .profile__left {
      padding-left: 70px;
      img {
        width: 250px;
      }
      .contact {
        margin-top: 30px;
        li {
          padding: 10px 0;
        }
      }
    }
    .profile__right {
      .summary {
        margin-bottom: 40px;
        p {
          color: ${({ theme }) => theme.primary[1]};
          font-size: 48px;
          font-weight: 700;
        }
        p:first-of-type {
          font-family: 'Spoqa Han Sans Neo', sans-serif;
          font-weight: 300;
        }
        span {
          display: block;
          margin-top: 10px;
          font-size: 20px;
          color: ${({ theme }) => theme.textColor.lighter};
        }
      }
      .education {
        h3 {
          font-size: 36px;
          margin-bottom: 20px;
        }
        & > ul {
          font-family: 'Spoqa Han Sans Neo', sans-serif;
          font-weight: 300;
          & > li {
            display: flex;
            padding: 10px 0;
            text-align: end;
            h4 {
              font-weight: 400;
              font-size: 24px;
            }
            & > ul {
              flex: 1;
              li {
                padding: 5px 0;
              }
            }
            span {
              font-size: 20px;
            }
            small {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;
export const SkillsContainer = styled.div`
  height: 100vh;
  .inner {
    .skill__list {
      margin: 40px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        font-size: 32px;
      }
      ul {
        margin: 20px 00px;
        display: flex;
        li {
          padding: 0 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          svg {
            width: 24px;
            height: 24px;
            margin-bottom: 5px;
          }
          span {
            font-size: 14px;
          }
        }
      }
      p {
        font-family: 'Spoqa Han Sans Neo', sans-serif;
        font-size: 14px;
        font-weight: 300;
      }
      small {
        cursor: pointer;
        padding: 10px 0;
        font-weight: 500;
        color: ${({ theme }) => theme.textColor.lighter};
        &:hover {
          text-decoration: underline;
          color: ${({ theme }) => theme.textColor.initial};
        }
      }
    }
  }
`;
