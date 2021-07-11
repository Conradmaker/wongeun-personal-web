import Icon from 'components/Icon/Icon';
import projectData, { ProjectData } from 'data/worksData';
import React from 'react';
import { BiLink } from 'react-icons/bi';
import { CgFileDocument } from 'react-icons/cg';
import { FaGithubAlt } from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import Slider, { CustomArrowProps } from 'react-slick';
import { ResumeWorksContainer, ResumeWorksItemBox } from './styles';

type WorkItemProps = {
  project: ProjectData;
};
function WorkItem({ project }: WorkItemProps): JSX.Element {
  return (
    <ResumeWorksItemBox>
      <img src={project.thumbnail} alt="thumbnail" />
      <div className="description">
        <p>{project.summary}</p>
        <ul className="feature">
          {project.desc.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="link">
          {project.siteLink && (
            <li onClick={() => window.open(project.siteLink)}>
              <BiLink />
              <span>Link</span>
            </li>
          )}
          {project.ghLink && (
            <li onClick={() => window.open(project.ghLink)}>
              <FaGithubAlt />
              <span>Code</span>
            </li>
          )}
          {project.docLink && (
            <li onClick={() => window.open(project.docLink)}>
              <CgFileDocument />
              <span>Doc</span>
            </li>
          )}
        </ul>
        <div className="stack">
          {Object.entries(project.stack).map(([key, skills]) => (
            <React.Fragment key={project.id + key + 'stack__list'}>
              <h3>{key}</h3>
              <ul>
                {skills.map(skill => (
                  <li key={project + key + skill}>
                    <Icon name={skill} />
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </div>
      </div>
    </ResumeWorksItemBox>
  );
}

interface ArrowProps extends CustomArrowProps {
  type: string;
}
function Arrow({ onClick, type }: ArrowProps): JSX.Element {
  return (
    <div
      className={`slick-arrow ${type === 'next' ? 'slick-next' : 'slick-prev'}`}
      onClick={onClick}
    >
      {type === 'next' ? <IoIosArrowBack /> : <IoIosArrowForward />}
    </div>
  );
}
export default function Works(): JSX.Element {
  const arr = Object.entries(projectData).map(([, value]) => value);
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow type="prev" />,
    prevArrow: <Arrow type="next" />,
    customPaging: (i: number) => <div>{arr[i].title}</div>,
  };
  return (
    <ResumeWorksContainer id="resume__works">
      <div className="inner">
        <h2>개발 내역</h2>
      </div>
      <div className="content">
        <Slider {...settings}>
          {Object.entries(projectData).map(([key, value]) => {
            return <WorkItem key={key} project={value} />;
          })}
        </Slider>
      </div>
    </ResumeWorksContainer>
  );
}
