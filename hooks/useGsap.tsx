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
    gsap.to(elRef.current, duration, options);
  }, []);

  return elRef;
}
