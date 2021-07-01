import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { BiLink } from 'react-icons/bi';
import { CgFileDocument } from 'react-icons/cg';
import PageTitle from 'components/Typography/PageTitle';
import { EtcListContainer, ProjectItemBox } from './styles';
import Icon from 'components/Icon/Icon';
import projectData from 'data/worksData';

type ProjectItemProps = {
  projectData: typeof projectData[keyof typeof projectData];
  openDoc: (link: string) => void;
};
function ProjectItem({ projectData, openDoc }: ProjectItemProps): JSX.Element {
  return (
    <ProjectItemBox>
      <img src="/starbucks.png" alt="" />
      <div className="item__layer">
        <ul className="stack">
          {[...projectData.stack.front, ...projectData.stack.back].map(skill => (
            <li key={projectData.id + skill}>
              <Icon name={skill} />
            </li>
          ))}
        </ul>
        <div className="summary">
          <h4>{projectData.title}</h4>
          <p>{projectData.summary}</p>
        </div>
        <ul className="btn__group">
          {projectData.siteLink && (
            <li onClick={() => window.open(projectData.siteLink)}>
              <BiLink />
              <span>Link</span>
            </li>
          )}
          {projectData.ghLink && (
            <li onClick={() => window.open(projectData.ghLink)}>
              <FaGithubAlt />
              <span>Code</span>
            </li>
          )}
          {projectData.docLink && (
            <li onClick={() => openDoc(projectData.docLink)}>
              <CgFileDocument />
              <span>Doc</span>
            </li>
          )}
        </ul>
      </div>
    </ProjectItemBox>
  );
}

type EtcListProps = {
  openDoc: (id: string) => void;
};
export default function EtcList({ openDoc }: EtcListProps): JSX.Element {
  return (
    <EtcListContainer>
      <div className="inner page__section">
        <PageTitle width={500}>
          <h1>Others</h1>
          <h2>다른 프로젝트들이 궁금하신가요?</h2>
        </PageTitle>
        <ul className="project__list">
          {Object.entries(projectData).map(([key, value]) => (
            <ProjectItem projectData={value} key={key + 'card'} openDoc={openDoc} />
          ))}
        </ul>
      </div>
    </EtcListContainer>
  );
}
