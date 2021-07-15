import useGsap from 'hooks/useGsap';
import React from 'react';
import { SkillsBodyContainer } from './styles';

export default function SkillBody(): JSX.Element {
  const ref1 = useGsap<HTMLLIElement>(
    {
      from: { opacity: 0, x: 30 },
      to: { opacity: 1, x: 0, duration: 1 },
    },
    true
  );
  const ref2 = useGsap<HTMLLIElement>(
    {
      from: { opacity: 0, x: -30 },
      to: { opacity: 1, x: 0, duration: 1 },
    },
    true
  );
  const ref3 = useGsap<HTMLLIElement>(
    {
      from: { opacity: 0, x: 30 },
      to: { opacity: 1, x: 0, duration: 1 },
    },
    true
  );
  const ref4 = useGsap<HTMLLIElement>(
    {
      from: { opacity: 0, x: -30 },
      to: { opacity: 1, x: 0, duration: 1 },
    },
    true
  );
  const ref5 = useGsap<HTMLLIElement>(
    {
      from: { opacity: 0, x: 30 },
      to: { opacity: 1, x: 0, duration: 1 },
    },
    true
  );
  return (
    <SkillsBodyContainer>
      <ul className="box__container">
        <li ref={ref1}>
          <h3>React, Vue</h3>
          <ul className="summary__container">
            <li>
              <b>React</b>의 스펙에 대하여 이해하고 사용하는 것에 익숙합니다.
            </li>
            <li>
              <b>Redux</b> 및 <b>redux-toolkit</b>을 이용하여 다양한 미들웨어 사용에
              익숙합니다.
            </li>
            <li>
              <b>Next.js</b>를 활용한 SSR 및 SSG 개발 경험이 있습니다.
            </li>
            <li>
              styled-components, emotion과 같은 <b>CSS-in-JS</b> 사용에 익숙합니다.
            </li>
            <li>
              <b>SWR</b> 등의 Data Fetching 라이브러리를 사용경험이 있습니다.
            </li>
            <li>
              <b>Vue.js</b>, <b>Vuex</b> 개발 및 테스트코드 작성 경험이 있습니다.
            </li>
            <li>
              <b>React-native</b> 사용 경험이 있습니다.
            </li>
          </ul>
        </li>
        <li ref={ref2}>
          <h3>JavaScript</h3>
          <ul className="summary__container">
            <li>
              <b>ES6+</b> 문법사용에 익숙합니다.
            </li>
            <li>
              <b>TypeScript</b>를 이용한 정적 타이핑이 가능합니다.
            </li>
            <li>
              <b>Webpack</b>을 이용한 번들링 경험 및 이해도가 있습니다.
            </li>
            <li>
              <b>Jest</b>를 활용한 테스트코드 작성 경험이 있습니다.
            </li>
          </ul>
        </li>
        <li ref={ref3}>
          <h3>HTML / CSS</h3>
          <ul className="summary__container">
            <li>웹표준을 지키려 노력합니다.</li>
            <li>
              <b>Webpack</b>을 이용한 번들링 경험 및 이해도가 있습니다.
            </li>
            <li>
              <b>SCSS</b> 문법에 익숙합니다.
            </li>
            <li>
              <b>Antd, Vuetify, BootStrap</b> 등의 css 라이브러리를 사용할 수 있습니다.
            </li>
            <li>애니메이션 기법을 활용할 수 있습니다.</li>
          </ul>
        </li>
        <li ref={ref4}>
          <h3>Back-End</h3>
          <ul className="summary__container">
            <li>
              <b>Express.js</b> 프레임워크 사용에 익숙하며, <b>Nestjs</b>사용경험이
              있습니다.
            </li>
            <li>
              <b>Sequelize</b> ORM을 이용해 데이터를 조작하는데 익숙합니다.
            </li>
            <li>
              <b>데이터베이스</b> 설계 및 <b>ERD</b>를 작성하는 것에 익숙합니다.
            </li>
            <li>
              <b>RDBMS</b>를 사용하는 것에 익숙하며, <b>NoSQL</b>
              사용경험이 있습니다.
            </li>
            <li>
              <b>Java</b> 및 <b>Spring프레임워크</b> 사용경험이 있습니다.
            </li>
            <li>
              <b>GraphQL</b>에 대한 이해도가 있습니다.
            </li>
          </ul>
        </li>
        <li ref={ref5}>
          <article>
            <h3>Design</h3>
            <ul className="summary__container">
              <li>
                <b>Figma</b>, <b>Adobe XD</b>를 사용하여 디자인 시스템을 구축할 수
                있습니다.
              </li>
              <li>
                <b>UX디자인리서치</b> 방법론에 대하여 이해하고 있습니다.
              </li>
              <li>
                <b>서비스기획</b> 절차에 대하여 이해하고 활용해 본 경험이 있습니다.
              </li>
              <li>
                <b>Jeplin</b>,<b>Miro</b>와 같은 다양한 협업 툴을 사용한 경험이 있습니다.
              </li>
            </ul>
          </article>
          <article>
            <h3>Dev-Ops / ETC</h3>
            <ul className="summary__container">
              <li>
                <b>AWS, Azure</b>등의 클라우드 서비스를 이용한 서버구축 및 배포경험이
                있습니다.
              </li>
              <li>
                <b>S3, Lambda, Route53, RDS, EC2</b>등의 AWS 리소스를 이용할 수 있습니다.
              </li>
              <li>
                <b>Microsoft Azure</b> Fundamental Traning Day를 수료하였습니다.
              </li>
              <li>
                <b>Git</b>을 이용한 형상관리 및 <b>flow</b>에 대한 이해가 있습니다.
              </li>
            </ul>
          </article>
        </li>
      </ul>
    </SkillsBodyContainer>
  );
}
