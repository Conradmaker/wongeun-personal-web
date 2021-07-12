import Icon, { IconName } from 'components/Icon/Icon';
import skillList from 'data/skillListData';
import useGsap from 'hooks/useGsap';
import React from 'react';
import SkillBody from './SkillBody';
import { ResumeSkillsContainer } from './styles';

export default function Skills(): JSX.Element {
  return (
    <ResumeSkillsContainer className="skills" id="resume__skills">
      <div className="inner">
        <div className="skill__header">
          <h2>
            제가 할 수 있는 것은
            <br /> 이렇습니다.
          </h2>
          {Object.entries(skillList).map(([key, value]) => {
            const ref = useGsap<HTMLUListElement>(
              { from: { x: 100, opacity: 0 }, to: { x: 0, opacity: 1 } },
              true
            );
            return (
              <div key={key + 'a'} className={`skill__list ${key}`}>
                <h3>{value.name}</h3>
                <ul ref={ref}>
                  {value.list.map(skillItem => {
                    return (
                      <li key={skillItem.name + 'b'}>
                        <Icon name={skillItem.icon as IconName} />
                        <span>{skillItem.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <SkillBody />
      </div>
    </ResumeSkillsContainer>
  );
}
