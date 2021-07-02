import SideTitle from 'components/Typography/SideTitle';
import React from 'react';
import { ProfileContainer } from './styles';
import educationList from 'data/educationData';

export default function Profile(): JSX.Element {
  return (
    <ProfileContainer>
      <div className="inner page__section">
        <SideTitle value="PROFILE" />
        <article className="profile__left">
          <img src={process.env.NEXT_PUBLIC_MY_PHOTO} alt="profile" />
          <ul className="contact">
            <li>Tel. 010-8731-0337</li>
            <li>Email. yhg0337@gmail.com</li>
            <li>서울특별시 서초구 양재동</li>
          </ul>
        </article>
        <article className="profile__right">
          <div className="summary">
            <p>유원근</p>
            <p>Wongeun Yoo</p>
            <span>1996.04.09 / 서울특별시</span>
          </div>
          <div className="education">
            <h3>Education</h3>
            <ul>
              {educationList.map(yearEdu => (
                <li key={yearEdu.year}>
                  <h4>{yearEdu.year}/</h4>
                  <ul>
                    {yearEdu.task.map(t => (
                      <li key={t.id}>
                        <span>{t.name}</span>
                        {t.detail.map(d => (
                          <small key={d}>{d}</small>
                        ))}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </ProfileContainer>
  );
}
