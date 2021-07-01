import React from 'react';
import { FooterContainer } from './styles';

export default function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <div className="inner">
        <div className="footer__left">
          <div className="logo">Conrad.maker</div>
          <span>개발과 배움을 즐거워하는 개발자 유원근입니다.</span>
          <p>&copy; 2021. 유원근 All rights reserved.</p>
        </div>
        <div className="footer__right">
          <ul>
            <li>TEL . 010 - 8731 - 0337</li>
            <li>Email . yhg0337@gmail.com</li>
            <li>
              <a href="https://github.com/Conradmaker" target="_blank">
                visit Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
}
