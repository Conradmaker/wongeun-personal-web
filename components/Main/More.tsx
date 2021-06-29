import SideTitle from 'components/Typography/SideTitle';
import Link from 'next/link';
import React from 'react';
import { MoreContainer } from './styles';

export default function More(): JSX.Element {
  return (
    <MoreContainer>
      <div className="inner page__section">
        <SideTitle value="MORE" />
        <div className="why-me">
          <h3>Why Me?</h3>
          <ul>
            <li>
              저는 개발을 빠르게 할 수 있습니다. 단순히 빠른게 하는 것이 장점이라고 할
              수는 없습니다. 하지만 꼼꼼함을 잃지 않고 다른사람보다 코드를 더 보고, 더
              개선할 수 있는 시간을 만들 수 있다는 것입니다.
            </li>
            <li>
              노력과 시간을 쏟을 수 있습니다.
              <br />
              단순히 빠른게 하는 것이 장점이라고 할 수는 없습니다. 하지만 꼼꼼함을
            </li>
            <li>
              하지만 꼼꼼함을 잃지 않고 다른사람보다 코드를 더 보고, 더 개선할 수 있는
              시간을 만들 수 있다는 것입니다.
            </li>
          </ul>
        </div>
        <div className="portfolio">
          <h3>PortFolio</h3>
          <p>결과물을 보고싶으시면 버튼을 눌러주세요!!</p>
          <Link href="/works">
            <p>이동</p>
          </Link>
        </div>
      </div>
    </MoreContainer>
  );
}
