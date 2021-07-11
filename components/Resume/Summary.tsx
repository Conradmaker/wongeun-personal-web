import React from 'react';
import { ResumeSummaryContainer } from './styles';

export default function Summary(): JSX.Element {
  return (
    <ResumeSummaryContainer>
      <div className="inner">
        <h2>
          저는 준비된
          <br /> 주니어가 되고 싶습니다.
        </h2>
        <ul>
          <li>
            <h3>다양한 환경에 적응 및 소통할 수 있습니다.</h3>
            <p>
              기획, 디자인, 개발, 운영 등의 프로젝트가 완성되는 동안의 절차에 참여하여
              소통할 수 있으며, 다양한 개발환경에 적응할 수 있습니다.
            </p>
          </li>
          <li>
            <h3>게으른 사람이 되지 않겠습니다.</h3>
            <p>
              한국과 일본의 웹, 앱에서 두루 활용해야 했기에 국문, 영문, 일문에 모두
              대응하는 오픈소스 글꼴 노토 산스를 커스텀했습니다
            </p>
          </li>
          <li>
            <h3>개발을 즐길 수 있습니다.</h3>
            <p>
              재미있지 않았다면 개발을 시작하지 않았습니다. 문제가 생겨도 그걸 해쳐나가는
              과정또한 기회라고 생각할 수 있습니다.
            </p>
          </li>
          <li>
            <h3>생각하는 개발자가 되고자 합니다.</h3>
            <p>
              단순히 키보드만 두드리는 그런 개발자가 아닌, 코드에 기여해서 어떻게 코드의
              품질을 높일 수 있는지를 생각하며 개발합니다.
            </p>
          </li>
        </ul>
      </div>
    </ResumeSummaryContainer>
  );
}
