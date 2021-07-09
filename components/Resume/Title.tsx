import React from 'react';
import { ResumeTitleContainer } from './styles';

export default function Title(): JSX.Element {
  return (
    <ResumeTitleContainer>
      <div className="inner">
        <h1>
          <span className="w700 fade-out">
            Hello, I'm <strong>Wongeun Yoo</strong>, a front-end developer.
          </span>
          <span className="w500 fade-out">
            I always enjoy developing and learning and I am looking for growth.
          </span>
          <span className="w500 to-big ">
            안녕하세요, 프론트 엔드 주니어 개발자 <strong className="big">유원근</strong>
            입니다.
          </span>
          <span className="w400 to-big ">
            언제나 개발과 학습을 즐기고 있으며 성장을 추구합니다.
          </span>
          <span className="w300 fade-out">
            こんにちはフロントエンド開発者<strong>ユウォングン</strong>です。
          </span>
          <span className="w100 fade-out">
            私はいつもの開発と学習を楽しんでおり、成長を追求します。
          </span>
        </h1>
      </div>
    </ResumeTitleContainer>
  );
}
