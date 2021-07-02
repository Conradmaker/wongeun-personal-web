import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useCallback } from 'react';
import { IncompleteContainer } from './styles';

export default function Incomplete(): JSX.Element {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, []);

  const goHome = useCallback(() => {
    router.push('/');
  }, []);

  return (
    <IncompleteContainer>
      <div className="inner">
        <img src="/gif/404.gif" alt="loading" />
        <p>
          준비중인 페이지입니다.
          <br />
          조금만 기다려주세요!
        </p>
        <div className="btn__group">
          <span onClick={goBack}>뒤로가기</span>
          <span onClick={goHome}>홈으로</span>
        </div>
      </div>
    </IncompleteContainer>
  );
}
