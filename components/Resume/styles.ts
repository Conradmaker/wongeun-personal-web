import styled, { css, keyframes } from 'styled-components';
const fadeOut = keyframes`
      from{
        filter: blur(0px);
      }
      to{
        color: #aaa;
        filter: blur(3px);
      }
`;
const toBig = keyframes`
      from{
          transform: scale(1);
      }
      to{
          transform: scale(1);
      }
`;
const slideLeft = keyframes`
    from{
        transform:translateX(800px);
        opacity: 0;
    }
    to{
        transform:translateX(0);
        opacity: 1;
    }
`;
const slideUp = keyframes`
    from{
        opacity: 0;
        transform:translateY(500px);
    }
    to{
        opacity: 1;
        transform:translateY(0);
    }
`;
const fadeIn = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;
export const ResumeTitleContainer = styled.section`
  height: 100vh;
  .inner {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-family: 'Spoqa Han Sans Neo', sans-serif;

    h1 {
      overflow: visible;
      word-break: break-all;
      letter-spacing: 0.9px;
      line-height: 60px;
      perspective: 300px;
      .w100 {
        font-weight: 100;
      }
      .w300 {
        font-weight: 300;
      }
      .w400 {
        font-weight: 400;
      }
      .w500 {
        font-weight: 500;
      }
      .w700 {
        font-weight: 700;
      }
      .big {
        font-size: 44px;
      }
      .lighter {
        color: #aaa;
      }
      .fade-out {
        color: #555;
        animation: ${fadeOut} 1.4s ease-in-out 1s forwards;
      }
      .to-big {
        transform: translateZ(100px);
        animation: ${toBig} 1s ease-in-out 1s forwards;
      }
      span {
        margin-right: 10px;
        color: #000;
      }
      strong {
        color: #4c80f1;
      }
    }
  }
  @media (max-width: 770px) {
    .inner {
      padding: 10px 20px 30px;
      font-size: 24px;
      h1 {
        line-height: 40px;
        .big {
          font-size: 28px;
        }
      }
    }
  }
`;

export const ResumeSummaryContainer = styled.section`
  height: 100vh;
  .inner {
    color: #444;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      font-size: 36px;
      margin-bottom: 50px;
      line-height: 1.2;
    }
    & > ul {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 50px 40px;
      line-height: 1.4;
      li {
        h3 {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        p {
          font-weight: 300;
        }
      }
    }
  }
  @media (max-width: 770px) {
    height: auto;
    min-height: 100vh;
    .inner {
      margin: 30px 0;
      padding: 0 20px;
      min-height: 100vh;
      & > ul {
        grid-template-columns: repeat(1, 1fr);
        li > h3 {
          &::before {
            content: '- ';
          }
        }
      }
    }
  }
`;

export const ResumeProfileContainer = styled.section`
  height: 100vh;
  b {
    color: #4c80f1;
  }
  .inner {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    color: #444;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      font-size: 36px;
      font-weight: 400;
      br {
        display: none;
      }
    }
    blockquote {
      margin-top: 40px;
      padding: 40px 0 40px 0;
      border-top: 1px solid #ddd;

      strong {
        display: inline-block;
        font-size: 52px;
        font-weight: 900;
        line-height: 1.2;
      }
      strong:nth-of-type(2) {
        text-align: justify;
        width: 100%;
      }
      small {
        margin-left: 10px;
        display: inline;
        text-align: end;
        font-size: 16px;
        font-weight: 600;
      }
    }

    article {
      border-bottom: 1px solid #ddd;
      padding-bottom: 70px;
      display: flex;
      p {
        line-height: 1.9;
        letter-spacing: 0.8px;
        flex: 1;
        font-size: 18px;
        font-weight: 300;
        margin-right: 40px;
      }
      ul {
        flex: 0.5;
        li {
          font-weight: 300;
          line-height: 2;
          font-size: 16px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex-direction: row-reverse;
          svg {
            width: 18px;
            height: 18px;
            margin-right: 10px;
          }
          a {
            color: #000;
            text-decoration: none;
          }
          a:hover + svg,
          a:hover {
            fill: #4c80f1;
            color: #4c80f1;
          }
        }
      }
    }
  }
  @media (max-width: 770px) {
    height: auto;
    .inner {
      height: auto;
      min-height: 100vh;
      padding: 0px 20px;
      margin: 50px 0px;
      h2 {
        line-height: 1.2;
        br {
          display: initial;
        }
      }
      blockquote {
        margin-top: 40px;
        strong {
          font-size: 22px;
          line-height: 1.5;
        }
        small {
          font-size: 14px;
        }
      }
      article {
        padding-bottom: 20px;
        flex-direction: column;
        p {
          margin-right: 5px;
        }
        ul {
          flex: initial;
          margin-top: 30px;
          li {
            justify-content: flex-start;
          }
        }
      }
    }
  }
`;

export const ResumeSkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  /* overflow: scroll; */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  .inner {
    padding: 50px 0;
    height: auto;
    .skill__header {
      h2 {
        font-family: 'Spoqa Han Sans Neo', sans-serif;
        font-size: 36px;
        font-weight: 400;
        margin: 50px 0;
        br {
          display: none;
        }
      }
      h3 {
        font-weight: 500;
      }
      ul {
        display: flex;
        padding: 20px 0;
        li {
          padding: 10px 20px 10px 0;
          white-space: nowrap;
          display: flex;
          flex-direction: column;
          align-items: center;
          svg {
            width: 20px;
            height: 20px;
            margin-bottom: 4px;
          }
          span {
            font-size: 12px;
          }
        }
      }
    }
  }
  @media (max-width: 770px) {
    .inner {
      padding: 0 20px;
      .skill__header {
        h2 {
          margin-top: 100px;
          line-height: 1.5;
          br {
            display: initial;
          }
        }
        ul {
          padding: 7px 0 60px 0;
          flex-wrap: wrap;
          li {
            padding: 15px 15px 15px 0;
            svg {
              width: 19px;
              height: 19px;
              margin-bottom: 4px;
            }
            span {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`;
export const SkillsBodyContainer = styled.div`
  padding-bottom: 100px;
  .box__container {
    & > li {
      padding: 60px 0;
      border-bottom: 1px solid #ddd;
      display: flex;
      h3 {
        flex: 1;
        font-size: 30px;
      }
      b {
        color: #4c80f1;
      }
      ul.summary__container {
        font-size: 18px;
        font-weight: 300;
        flex: 1.7;
        line-height: 1.2;
        li {
          padding: 5px 0;
          list-style: circle;
        }
      }
      article {
        flex: 1;
        padding-right: 20px;
        h3 {
          margin-bottom: 20px;
        }
        .summary__container > li {
          padding: 5px 0;
          list-style: none;
        }
      }
      article:nth-of-type(2n) {
        padding-left: 20px;
        padding-right: 0;
        border-left: 1px solid #ddd;
      }
    }
  }
  @media (max-width: 770px) {
    .box__container {
      & > li {
        flex-direction: column;
        h3 {
          margin-bottom: 20px;
        }
        ul.summary__container {
          li {
            margin-left: 10px;
            list-style: circle;
          }
        }
        article {
          width: 100%;
          border-left: none;
          padding-bottom: 60px;
        }
        article:nth-of-type(2n) {
          border-left: none;
          border-top: 1px solid #ddd;
          padding: 60px 0 0 0;
        }
      }
    }
  }
`;

export const ResumeWorksContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1425px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 70px 0 70px 0;
  .inner {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    width: 100%;
    height: auto;
    position: static;
    display: block;
    h2 {
      font-size: 36px;
      font-weight: 400;
      margin-bottom: 40px;
    }
  }
  .content {
    flex: 1;
    .slick-slider {
      padding-top: 50px;
      height: 100%;
      .slick-list,
      .slick-track {
        height: 100%;
        .slick-slide {
          position: relative;
        }
      }
      .slick-arrow {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 45%;
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        cursor: pointer;
      }
      .slick-arrow.slick-prev {
        right: 20px;
      }
      .slick-arrow.slick-next {
        left: 20px;
      }
      .slick-dots {
        max-width: 830px;
        position: absolute;
        font-weight: 300;
        justify-content: space-between;
        height: 36px;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        display: flex !important;
        letter-spacing: 0.8px;
        color: #aaa;
        li {
          white-space: nowrap;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 2px solid #ddd;
          cursor: pointer;
          padding: 0 20px 10px 20px;
          transition: all 0.3s;
        }
        .slick-active {
          flex: 1;
          border-bottom: 2px solid #4c80f1;
          color: #4c80f1;
          font-weight: 500;
          font-size: 20px;
        }
      }
    }
  }
  @media (max-width: 770px) {
    .inner {
      padding: 0 20px;
    }
    .content {
      padding: 0 20px;
    }
    .content > .slick-slider {
      .slick-arrow {
        width: 30px;
        top: 30%;
      }
      .slick-arrow.slick-prev {
        right: 0px;
      }
      .slick-arrow.slick-next {
        left: 0px;
      }
      .slick-dots {
        max-width: 100vw;
        width: 100%;
        li {
          font-size: 10px;
          padding: 0 5px 5px 5px;
        }
        .slick-active {
          font-size: 14px;
        }
      }
    }
  }
`;
export const ResumeWorksItemBox = styled.div`
  height: 100%;
  padding: 0 250px;
  display: flex;
  margin-top: 10px;
  img {
    max-width: 60%;
    max-height: 500px;
    object-fit: contain;
  }
  .description {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    font-weight: 300;
    line-height: 1.4;
    width: 500px;
    padding: 5px 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    position: relative;
    p {
      font-weight: 500;
      margin: 5px 0;
      font-size: 18px;
    }
    .feature {
      margin-bottom: 15px;
      font-weight: 200;
      flex: 1;
      li {
        list-style: circle;
        padding: 2px 0;
      }
    }
    .link {
      position: absolute;
      right: -100px;
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      li {
        border-radius: 3px;
        width: 50px;
        height: 50px;
        border: 2px solid #eee;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #4c80f1;
        transition: all 0.3s;
        svg {
          font-size: 18px;
        }
        span {
          font-size: 14px;
        }
        &:hover {
          border: 2px solid #4c80f1;
        }
      }
    }
    .stack {
      display: flex;
      flex-direction: column;
      ul {
        display: flex;
        li {
          padding: 5px 15px 10px 0;
          svg {
            width: 25px;
            height: 25px;
          }
        }
      }
    }
  }
  @media (max-width: 770px) {
    flex-direction: column;
    padding: 0 00px;
    img {
      max-width: 100%;
      width: 100%;
      max-height: auto;
    }
    .description {
      width: 100%;
      .feature {
        margin-bottom: 25px;
        font-weight: 200;
        flex: 1;
        li {
          list-style: circle;
          padding: 2px 0;
        }
      }
      .link {
        bottom: 0px;
        right: 0;
        li {
          width: 45px;
          height: 45px;
        }
      }
      .stack {
        ul > li {
          padding: 5px 12px 10px 0;
          svg {
            width: 20px;
            height: 20px;
          }
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
  top: 0;
  &::after {
    content: '';
    transition: width 0.4s ease-in-out;
    display: block;
    height: 4px;
    background-color: #4c80f1;
    transition: all 0.3s;
    width: ${({ width }) => width}%;
  }
`;

export const ResumeNav = styled.nav<{ width: number; open: boolean }>`
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  font-weight: 300;
  z-index: 9999;
  position: fixed;
  top: 50px;
  left: 50px;
  display: flex;
  flex-direction: column;
  a {
    font-size: 14px;
    padding: 5px 0;
    text-decoration: none;
    color: #aaa;
    transition: all 0.3s;
  }
  a.active {
    color: #4c80f1;
  }
  .menu {
    display: flex;
    align-items: center;
    i {
      display: none;
      font-size: 25px;
      color: #4c80f1;
    }
  }
  p {
    width: 20px;
    height: 23px;
    margin-bottom: 3px;
    color: #4c80f1;
    border-bottom: 1px solid #4c80f1;
    &::after {
      content: '${({ width }) => Math.floor(width)}%';
    }
  }
  @media screen and (max-width: 768px) {
    cursor: pointer;
    height: 32px;
    width: auto;
    overflow: hidden;
    top: 20px;
    left: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 5px 10px 0px 8px;
    border-radius: 15px;
    transition: all 0.3s;
    .menu {
      p {
        width: auto;
        height: 18px;
        font-size: 14px;
        margin-bottom: 5px;
      }
      i {
        margin-right: 5px;
        display: initial;
        svg {
          transition: all 0.3s;
        }
      }
    }
    a {
      font-size: 18px;
      padding: 5px 0;
    }
    ${({ open }) =>
      open &&
      css`
        height: 180px;
        .menu > i > svg {
          transform: rotate(180deg);
        }
      `}
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: rgba(115, 115, 115, 0.4);
  animation: ${fadeIn} 0.4s ease-in-out;
  .btn__group {
    z-index: 99;
    display: flex;
    align-items: center;
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 30px;
    background-color: #fff;
    & > div {
      transition: 0.3s;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      border-radius: 30px;
      padding: 6px;
      &:hover {
        background-color: #aaa;
      }
    }
  }
  .close__btn {
    cursor: pointer;
    background: none;
    color: #fff;
    position: absolute;
    font-size: 20px;
    top: 2%;
    right: 15%;
    z-index: 9999;
    transform: translateX(50%);
    border-bottom: 1px solid #fff;
    display: none;
  }
  @media (max-width: 770px) {
    .btn__group {
      display: none;
    }
    .close__btn {
      top: 2%;
      right: 15%;
      font-size: 16px;
      display: initial;
    }
  }
`;
export const IframeModalBox = styled.div<{ fullMode: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: '#F6F6F6';
  box-shadow: 0 0 20px #000;
  animation: ${slideLeft} 0.5s ease-in-out;
  width: 1000px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  & > iframe {
    background-color: #fff;
    width: 100%;
    height: 100%;
  }
  ${({ fullMode }) =>
    fullMode &&
    css`
      min-width: auto;
      max-width: 1500px;
      width: 100%;
    `}
  @media (max-width: 770px) {
    width: 100vw;
    height: 93%;
    top: auto;
    bottom: 0;
    border-bottom-left-radius: 0px;
    animation: ${slideUp} 0.4s ease-in-out;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;
