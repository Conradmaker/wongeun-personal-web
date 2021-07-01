import gsap from 'gsap';
import { RefObject, useRef } from 'react';
import { useEffect } from 'react';

type UseGsapProps = {
  duration?: number;
  options: gsap.TweenVars;
};
export default function useGsap({
  duration = 1,
  options,
}: UseGsapProps): RefObject<HTMLDivElement> {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const Observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        isIntersecting && gsap.to(elRef.current, duration, options);
      },
      { root: null, threshold: 0.3 }
    );
    Observer.observe(elRef.current as Element);

    return () => {
      Observer.unobserve(elRef.current as Element);
    };
  }, []);

  return elRef;
}
