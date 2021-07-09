import React from 'react';
import { ResumeProfileContainer } from './styles';

export default function Profile(): JSX.Element {
  return (
    <ResumeProfileContainer>
      <div className="inner">
        <h2>
          저 <b>유원근</b>은 이런 사람입니다.
        </h2>
        <blockquote>
          <strong>훌륭한 개발팀 없이</strong>
          <small>Jim McCarthy</small>
          <strong>훌륭한 소프트웨어를 만들 수는 없다.</strong>
        </blockquote>

        <article>
          <p>
            <b>Frontend</b>를 깊이 있게 다져나가고자 하는 주니어 개발자입니다. Backend,
            Design에도 관심을 가지는 등, 분야를 가리지 않고 적극적으로 개발에 대한
            관심사를 넓혀나가고 있습니다. 다양한 협업경험을 쌓았으며, 언제나 꿈꿔왔던 좋은
            개발팀에 들어가 그 구성원이 되고 싶습니다.
          </p>
          <ul>
            <li>EMAIL . yhg0337@gmail.com</li>
            <li>TEL . 010-8731-0337</li>
            <li>
              GitHub:
              <a target="about:blank" href="https://github.com/Conradmaker">
                @Conradmaker
              </a>
            </li>
            <li>
              블로그:
              <a target="about:blank" href="https://wongeun.xyz/blog">
                BLOG
              </a>
            </li>
          </ul>
        </article>
      </div>
    </ResumeProfileContainer>
  );
}
