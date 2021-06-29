import React, { useState } from 'react';
import MoreSkillModal from 'components/Modal/MoreSkillModal';
import SideTitle from 'components/Typography/SideTitle';
import Icon, { IconName } from 'components/Icon/Icon';
import { SkillsContainer } from './styles';
import { useToggleModalContext } from 'hooks/ModalStateProvider';
import skillList from 'data/skillListData';

export default function Skills(): JSX.Element {
  const toggleGlobalModal = useToggleModalContext();
  const [currentMoreInfo, setCurrentMoreInfo] = useState<'front' | 'back' | 'etc'>(
    'front'
  );

  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const onOpenModal = (type: 'front' | 'back' | 'etc') => {
    toggleGlobalModal();
    setCurrentMoreInfo(type);
    setDetailModalOpen(true);
  };
  const onCloseModal = () => {
    toggleGlobalModal();
    setDetailModalOpen(false);
  };

  return (
    <SkillsContainer>
      <div className="inner page__section">
        <SideTitle value="SKILLS" />
        {Object.entries(skillList).map(([key, value]) => (
          <div key={key + 'a'} className={`skill__list ${key}`}>
            <h3>{value.name}</h3>
            <ul>
              {value.list.map(skillItem => (
                <li key={skillItem.name + 'b'}>
                  <Icon name={skillItem.icon as IconName} />
                  <span>{skillItem.name}</span>
                </li>
              ))}
            </ul>
            <small onClick={() => onOpenModal(key as 'front' | 'back' | 'etc')}>
              MORE
            </small>
          </div>
        ))}
      </div>
      {detailModalOpen && (
        <MoreSkillModal onClose={onCloseModal} currentMoreInfo={currentMoreInfo} />
      )}
    </SkillsContainer>
  );
}
