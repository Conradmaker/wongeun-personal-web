import styled from 'styled-components';

export const MainTitleContainer = styled.section`
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

export const ProfileContainer = styled.section`
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.background.lighter};
  height: 100vh;
  .side__title {
    top: 300px;
  }
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
              color: ${({ theme }) => theme.textColor.lighter};
              display: block;
              padding: 5px 0;
              font-size: 14px;
              &::before {
                content: '-';
              }
            }
          }
        }
      }
    }
  }
`;

export const SkillsContainer = styled.section`
  height: 100vh;
  .inner {
    .skill__list {
      margin: 50px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        font-size: 32px;
      }
      ul {
        margin: 25px 00px;
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

export const MoreContainer = styled.section`
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.background.lighter};
  height: 100vh;
  .side__title {
    top: 300px;
  }
  .inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.8px;
    line-height: 1.3;
    h3 {
      margin-bottom: 10px;
      font-size: 32px;
      text-align: center;
    }
    .why-me {
      margin-bottom: 50px;
      ul {
        font-family: 'Spoqa Han Sans Neo', sans-serif;
        margin: 0 auto;
        max-width: 80%;
        li {
          padding: 10px 0;
          font-weight: 300;
          &::before {
            content: '- ';
          }
        }
      }
    }
    .portfolio {
      p {
        text-align: center;
        font-family: 'Spoqa Han Sans Neo', sans-serif;
        font-weight: 300;
      }
      p:last-of-type {
        margin-top: 20px;
        cursor: pointer;
        text-decoration: underline;
        font-size: 18px;
        color: ${({ theme }) => theme.textColor.lighter};
      }
    }
  }
`;

export const ContactContainer = styled.section`
  transition: all 0.3s ease-in-out;
  height: 100vh;
  .inner {
    height: 100%;
    display: flex;
    padding-top: 120px;
    .side__title {
      top: 300px;
    }
    .page__title {
      padding: 30px 60px 0px 60px;
      h2 {
        padding-top: 20px;
        font-size: 18px;
        line-height: 1.3;
      }
    }
  }

  form {
    flex: 1;
    input,
    textarea {
      padding: 5px 5px;
      margin: 10px 0;
      border: none;
      width: 100%;
      letter-spacing: 1px;
      font-size: 16px;
      font-family: 'Spoqa Han Sans Neo', sans-serif;
      resize: none;
      border-radius: 3px;
      outline: none;
      border: 2px solid ${({ theme }) => theme.background.lighter};
      transition: all 0.2s ease-in-out;
      &:focus {
        border: 2px solid ${({ theme }) => theme.primary[1]};
      }
    }
    button {
      position: relative;
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      border: none;
      background-color: ${({ theme }) => theme.primary[1]};
      color: ${({ theme }) => theme.background.lighter};
      cursor: pointer;
      border-radius: 3px;
      transition: all 0.3s ease-in-out;
      svg {
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        background-color: ${({ theme }) => theme.background.lighter};
        color: ${({ theme }) => theme.primary[1]};
        border: 1px solid ${({ theme }) => theme.primary[1]};
        span {
          opacity: 0;
        }
        svg {
          transform: translateX(20px);
        }
      }
    }
  }
`;
