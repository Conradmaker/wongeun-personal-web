import React from 'react';
import { ResumeSummaryContainer } from './styles';

export default function Summary(): JSX.Element {
  return (
    <ResumeSummaryContainer id="resume__summary">
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
              소통할 수 있으며, 여러분야의 다양한 개발환경에 적응할 수 있습니다.
            </p>
          </li>
          <li>
            <h3>책임감을 가지고 임합니다.</h3>
            <p>
              저에게 주어진 업무에 대한 책임감을 가지고 내 컴퓨터가 뿐만이 아닌 다른
              사람의 컴퓨터에서도 잘 돌아갈 수 있는 코드를 만들고 싶습니다.
            </p>
          </li>
          <li>
            <h3>좋아서 합니다.</h3>
            <p>
              문제가 생겨도 그걸 해쳐나가는 과정 또한 기회라고 생각할 수 있으며 받아들 일
              수 있으며, 즐겁게 일할 수 있습니다.
            </p>
          </li>
          <li>
            <h3>생각하는 개발자가 되고자 합니다.</h3>
            <p>
              단순히 키보드만 두드리는 그런 개발자가 아닌, 코드에 기여해서 어떻게 코드의
              품질을 높일 수 있는지를 생각하며 개발할 수 있도록 노력합니다.
            </p>
          </li>
        </ul>
      </div>
    </ResumeSummaryContainer>
  );
}
