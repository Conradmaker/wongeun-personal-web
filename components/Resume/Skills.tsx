import Icon, { IconName } from 'components/Icon/Icon';
import skillList from 'data/skillListData';
import useGsap from 'hooks/useGsap';
import React from 'react';
import { useState } from 'react';
import SkillBody from './SkillBody';
import { ResumeSkillsContainer } from './styles';

export default function Skills(): JSX.Element {
  const [power, setPower] = useState(0);
  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const target = e.currentTarget as Element;
    if (target.scrollTop === 0) {
      console.log(power, '위');
      setPower(prev => prev + 1);
    } else if (target.scrollTop + target.clientHeight === target.scrollHeight) {
      console.log(power, '아래');
      setPower(prev => prev + 1);
    } else {
      console.log(target.scrollTop, power, 'else');
      setPower(0);
    }
    if (power > 8) return setPower(0);
    e.stopPropagation();
  };

  return (
    <ResumeSkillsContainer onWheel={onWheel}>
      <div className="inner">
        <div className="skill__header">
          <h2>제가 할 수 있는 것은 이렇습니다.</h2>
          {Object.entries(skillList).map(([key, value]) => (
            <div key={key + 'a'} className={`skill__list ${key}`}>
              <h3>{value.name}</h3>
              <ul>
                {value.list.map(skillItem => {
                  const ref = useGsap<HTMLLIElement>(
                    { from: { x: 100, opacity: 0 }, to: { x: 0, opacity: 1 } },
                    true
                  );
                  return (
                    <li ref={ref} key={skillItem.name + 'b'}>
                      <Icon name={skillItem.icon as IconName} />
                      <span>{skillItem.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <SkillBody />
      </div>
    </ResumeSkillsContainer>
  );
}
