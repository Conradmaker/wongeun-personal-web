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
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    .inner {
      flex-direction: column-reverse;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
      article {
        margin-bottom: 50px;
      }
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
          letter-spacing: 0.9px;
          color: ${({ theme }) => theme.textColor.initial};
          padding: 10px 0;
        }
      }
    }
    .profile__right {
      .summary {
        margin-bottom: 40px;
        p {
          color: ${({ theme }) => theme.textColor.primary};
          font-size: 48px;
          font-weight: 700;
        }
        p:first-of-type {
          font-family: 'Spoqa Han Sans Neo', sans-serif;
          font-weight: 300;
        }
        span {
          display: block;
          margin-top: 20px;
          font-size: 20px;
          color: ${({ theme }) => theme.textColor.lighter};
        }
      }
      .education {
        h3 {
          letter-spacing: 0.9px;
          color: ${({ theme }) => theme.textColor.initial};
          font-size: 36px;
          margin-bottom: 20px;
        }
        & > ul {
          font-family: 'Spoqa Han Sans Neo', sans-serif;
          font-weight: 300;
          & > li {
            letter-spacing: 0.9px;
            color: ${({ theme }) => theme.textColor.initial};
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
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    .inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
      .side__title {
      }
      article {
        margin-top: 30px;
        width: 100%;
        padding: 0;
        flex: 0;
      }
      .profile__left {
        padding: 0;
        display: flex;
        img {
          width: 125px;
        }
        .contact {
          flex: 1;
          margin-left: 25px;
          margin-top: auto;
          li {
            font-size: 14px;
          }
        }
      }
      .profile__right {
        .summary {
          p {
            font-size: 32px;
          }
          span {
            margin-top: 10px;
            font-size: 16px;
          }
        }
        .education {
          h3 {
            font-size: 24px;
          }
          & > ul {
            & > li {
              h4 {
                font-size: 16px;
              }
              span {
                font-size: 16px;
              }
              small {
                font-size: 12px;
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
        color: ${({ theme }) => theme.textColor.initial};
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
            color: ${({ theme }) => theme.textColor.lighter};
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
        transition: all 0.3s;
        padding: 3px 5px;
        border-bottom: 1px solid ${({ theme }) => theme.textColor.lighter};
        cursor: pointer;
        font-weight: 500;
        color: ${({ theme }) => theme.textColor.lighter};
        &:hover {
          padding: 3px 20px;
          border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
          color: ${({ theme }) => theme.textColor.initial};
        }
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    .inner {
      padding-left: 20px;
      padding-right: 20px;
      .skill__list {
        margin: 40px 0;
        h3 {
          font-size: 24px;
        }
        ul {
          margin: 10px 00px;
          flex-wrap: wrap;
          justify-content: center;
          li {
            padding: 7px 10px;
            justify-content: center;
            svg {
              width: 20px;
              height: 20px;
              margin-bottom: 3px;
            }
            span {
              color: ${({ theme }) => theme.textColor.lighter};
              font-size: 11px;
            }
          }
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
      color: ${({ theme }) => theme.textColor.initial};
      font-weight: 500;
      margin-bottom: 10px;
      font-size: 32px;
      text-align: center;
    }
    .why-me {
      margin-bottom: 50px;
      ul {
        color: ${({ theme }) => theme.textColor.lighter};
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
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        color: ${({ theme }) => theme.textColor.lighter};
        text-align: center;
        font-family: 'Spoqa Han Sans Neo', sans-serif;
        font-weight: 300;
      }
      p:last-of-type {
        margin-top: 20px;
        display: inline-block;
        border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
        padding: 2px 5px;
        cursor: pointer;
        font-size: 18px;
        color: ${({ theme }) => theme.textColor.initial};
        transition: all 0.3s;
        &:hover {
          padding: 2px 20px;
        }
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    .inner {
      padding: 60px 20px;
      h3 {
        margin-top: 50px;
        margin-bottom: 10px;
        font-weight: 400;
        font-size: 24px;
        text-align: center;
      }
      .why-me {
        margin: 0;
        ul {
          max-width: 100%;
          li {
            line-height: 1.4;
          }
        }
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
        border: 2px solid ${({ theme }) => theme.textColor.primary};
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
      background-color: ${({ theme }) => theme.textColor.primary};
      color: ${({ theme }) => theme.background.lighter};
      cursor: pointer;
      border-radius: 3px;
      transition: all 0.3s ease-in-out;
      svg {
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        background-color: ${({ theme }) => theme.background.lighter};
        color: ${({ theme }) => theme.textColor.primary};
        border: 2px solid ${({ theme }) => theme.textColor.primary};

        span {
          opacity: 0;
        }
        svg {
          transform: translateX(20px) scale(1.3);
        }
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    min-height: 100vh;
    height: auto;
    padding-bottom: 200px;
    .inner {
      padding: 60px 20px;
      flex-direction: column;
      .page__title {
        padding: 30px 0;
      }
    }
  }
`;
