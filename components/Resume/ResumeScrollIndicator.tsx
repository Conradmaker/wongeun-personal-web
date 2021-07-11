import { useEffect, useState } from 'react';
import throttle from 'utils/throttle';
import { ResumeNav, ScrollBar } from './styles';

const navData = [
  { id: 'title', value: 'TOP' },
  { id: 'profile', value: '소개' },
  { id: 'skills', value: '기술' },
  { id: 'summary', value: '이유' },
  { id: 'works', value: '작업물' },
];

export default function ResumeScrollIndicator(): JSX.Element {
  const [width, setWidth] = useState(0);
  const [currentSection, setCurrentSection] = useState('title');

  useEffect(() => {
    console.log(document.querySelector('#resume__summary')?.getBoundingClientRect().top);
    const indicator = throttle(() => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      const contentHeight = scrollHeight - clientHeight;
      const percent = (scrollTop / contentHeight) * 100;
      setWidth(percent);
    }, 50);

    window.addEventListener('scroll', indicator);
    return () => {
      window.removeEventListener('scroll', indicator);
    };
  }, []);

  useEffect(() => {
    setCurrentSection('title');

    const getOffsetSection = (id: string) =>
      (document.querySelector(`#resume__${id}`) as Element).getBoundingClientRect().top;

    const indicator2 = throttle(() => {
      if (150 > getOffsetSection('works')) setCurrentSection('works');
      else if (150 > getOffsetSection('summary')) setCurrentSection('summary');
      else if (150 > getOffsetSection('skills')) setCurrentSection('skills');
      else if (150 > getOffsetSection('profile')) setCurrentSection('profile');
      else if (0 > getOffsetSection('title')) setCurrentSection('title');
    }, 300);

    window.addEventListener('scroll', indicator2);
    return () => {
      window.removeEventListener('scroll', indicator2);
    };
  }, []);
  console.log(currentSection);
  return (
    <>
      <ResumeNav width={width}>
        <p></p>
        {navData.map(navItem => (
          <a
            key={navItem.id + 'nav'}
            href={`#resume__${navItem.id}`}
            className={navItem.id === currentSection ? 'active' : ''}
          >
            {navItem.value}
          </a>
        ))}
      </ResumeNav>
      <ScrollBar width={width}></ScrollBar>
    </>
  );
}
