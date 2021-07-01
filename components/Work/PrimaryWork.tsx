import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { BiLink } from 'react-icons/bi';
import { CgFileDocument } from 'react-icons/cg';
import PageTitle from 'components/Typography/PageTitle';
import Icon from 'components/Icon/Icon';
import { PrimaryWorkContainer } from './styles';
import { ProjectData } from 'data/worksData';

type PrimaryWorkProps = {
  openDoc: (link: string) => void;
  projectData: ProjectData;
};
export default function PrimaryWork({
  openDoc,
  projectData,
}: PrimaryWorkProps): JSX.Element {
  return (
    <PrimaryWorkContainer id={projectData.id}>
      <div className="inner page__section">
        <div className="content__header">
          <PageTitle width={500}>
            <h1>{projectData.title}</h1>
            <span>{projectData.summary}</span>
          </PageTitle>
          <div className="stack">
            {Object.entries(projectData.stack).map(([key, skills]) => (
              <React.Fragment key={projectData.id + key + 'stack__list'}>
                <h3>{key}</h3>
                <ul>
                  {skills.map(skill => (
                    <li key={projectData + key + skill}>
                      <Icon name={skill} />
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="content__body">
          <ul>
            <li>
              <strong>{projectData.type}</strong>
            </li>
            <li>
              <strong>비중</strong>
              <small>{projectData.shares}</small>
            </li>
            <li>
              <strong>역할</strong>
              <small>역할이 없다..</small>
            </li>
            <li>
              <strong>특징</strong>
              <small>{projectData.feature}</small>
            </li>
            <li>
              <strong>링크</strong>
              <ul>
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
            </li>
          </ul>
          <div className="img__wrapper">
            <img src="/developic.gif" alt="" />
          </div>
        </div>
      </div>
    </PrimaryWorkContainer>
  );
}
