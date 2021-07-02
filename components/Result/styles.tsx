import styled from 'styled-components';

export const IncompleteContainer = styled.div`
  height: 100vh;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  font-weight: 300;
  .inner {
    padding-bottom: 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 600px;
  }
  p {
    line-height: 1.4;
    text-align: center;
    font-size: 18px;
    margin: 30px 0;
    color: ${({ theme }) => theme.textColor.lighter};
  }
  .btn__group {
    display: flex;
    color: ${({ theme }) => theme.textColor.initial};
    span {
      font-weight: bold;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    span + span {
      margin-left: 30px;
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    .inner {
      padding: 0 20px 100px 20px;
      padding-bottom: 100px;
      img {
        width: 100%;
      }
    }
  }
`;
