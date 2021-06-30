import { useEffect } from 'react';
import throttle from 'utils/throttle';

export default function useChangeHeader(): void {
  const changeHeaderBG = throttle(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    const headerClass = (document.querySelector('header') as HTMLElement).classList;
    const isOdd = Math.floor(scrollTop / clientHeight) % 2 !== 0;

    if (isOdd) {
      headerClass.add('light');
    } else {
      headerClass.remove('light');
    }
  }, 200);

  useEffect(() => {
    window.addEventListener('scroll', changeHeaderBG);
    return () => {
      window.removeEventListener('scroll', changeHeaderBG);
    };
  }, []);
}
