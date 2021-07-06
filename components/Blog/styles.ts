import styled from 'styled-components';

export const BlogTitleContainer = styled.div`
  .inner.page__section {
    margin: 100px auto 50px auto;
    .page__title {
      text-align: center;
      h1 {
        margin-top: 30px;
      }
    }
  }
`;

export const BlogListContainer = styled.div`
  & > .inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px 30px;
    padding-bottom: 250px;
  }
`;

export const SearchBoxContainer = styled.div`
  .inner {
    margin: 70px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    ul {
      max-width: 700px;
      margin-top: 30px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      li {
        cursor: pointer;
        margin: 10px 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px 10px;
        border-radius: 30px;
        border: 1px solid ${({ theme }) => theme.textColor.primary};
        color: ${({ theme }) => theme.textColor.initial};
        background-color: ${({ theme }) => theme.background.lighter};
        transition: all 0.15s;
        &:hover {
          color: ${({ theme }) => theme.textColor.lighter};
          background-color: ${({ theme }) => theme.textColor.primary};
        }
        small {
          color: ${({ theme }) => theme.textColor.lighter};
          font-size: 14px;
          text-indent: 5px;
        }
        strong {
          display: none;
          align-items: center;
        }
        &.active {
          color: ${({ theme }) => theme.textColor.lighter};
          background-color: ${({ theme }) => theme.textColor.primary};
          small {
            display: none;
          }
          strong {
            display: flex;
          }
        }
      }
    }
  }
`;

export const PostCardBox = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.background.lighter};
  border-radius: 5px;
  transition: all 0.3s;
  .img__wrapper {
    position: relative;
    width: 100%;
    height: 179px;
    background: ${({ theme }) => theme.background.lighter};
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    .tag__list {
      opacity: 0;
      transition: all 0.4s;
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${({ theme }) => theme.layerColor.modalLayer};
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        padding: 5px;
        border-bottom: 1px solid #aaa;
        margin: 5px;
      }
    }
  }
  .summary {
    padding: 12px 8px;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    color: ${({ theme }) => theme.textColor.initial};
    b {
      font-weight: bold;
    }
    p {
      margin: 10px 0;
      font-size: 14px;
      font-weight: 300;
    }
    small {
      color: ${({ theme }) => theme.textColor.lighter};
      display: block;
      text-align: end;
      font-size: 12px;
    }
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 3px 5px ${({ theme }) => theme.background.extraLighter};
    .img__wrapper > .tag__list {
      opacity: 1;
    }
    .summary {
      color: ${({ theme }) => theme.textColor.primary};
    }
  }
`;
