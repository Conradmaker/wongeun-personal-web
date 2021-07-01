import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';

export default function useInterObserver(
  contentRef: React.MutableRefObject<(HTMLElement | null)[]>
): void {
  const router = useRouter();

  useEffect(() => {
    const scrollSpyObserver = new IntersectionObserver(
      entries => {
        const header = (document.querySelector('header') as HTMLElement).classList;
        const { target } = entries.find(en => en.isIntersecting) || {};
        const index = contentRef.current.indexOf(target as HTMLElement);
        if (index % 2 === 0) header.add('on');
        else header.remove('on');
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );
    contentRef.current.forEach(item => scrollSpyObserver.observe(item as HTMLElement));
    return () => {
      contentRef.current.forEach(item =>
        scrollSpyObserver.unobserve(item as HTMLElement)
      );
    };
  }, [router.asPath]);
}
