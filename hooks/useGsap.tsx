import gsap from 'gsap';
import { RefObject, useRef } from 'react';
import { useEffect } from 'react';

type UseGsapProps = {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
};
export default function useGsap<T extends Element>(
  { from, to }: UseGsapProps,
  observe = false
): RefObject<T> {
  const elRef = useRef<T>(null);

  useEffect(() => {
    if (observe) {
      const observer = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          const a = gsap.fromTo(elRef.current, from, to);
          if (isIntersecting) {
            a.repeat();
          } else {
            a.kill(elRef.current as Element);
          }
        },
        { threshold: 1 }
      );
      observer.observe(elRef.current as Element);
      return () => {
        observer.unobserve(elRef.current as Element);
      };
    } else {
      gsap.fromTo(elRef.current, from, to);
    }
  }, []);

  return elRef;
}
