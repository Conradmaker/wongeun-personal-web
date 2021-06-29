import SideTitle from 'components/Typography/SideTitle';
import React from 'react';
import { ProfileContainer } from './styles';
const educationList = [
  {
    year: 2015,
    task: [
      { id: 2015.1, name: '양재고등학교 졸업', detail: [] },
      {
        id: 2015.2,
        name: '용인대학교 입학',
        detail: ['경영정보학과 입학', '(부)경찰행정학과 입학'],
      },
    ],
  },
  { year: 2020, task: [{ id: 2020.1, name: 'KH정보교육원 자바반교육', detail: [] }] },
  { year: 2021, task: [{ id: 2021.1, name: '용인대학교 졸업', detail: [] }] },
];

export default function Profile(): JSX.Element {
  return (
    <ProfileContainer>
      <div className="inner page__section">
        <SideTitle value="PROFILE" />
        <article className="profile__left">
          <img src="/profile.jpg" alt="profile" />
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
                <li>
                  <h4>{yearEdu.year}/</h4>
                  <ul>
                    {yearEdu.task.map(t => (
                      <>
                        <li>
                          <span>{t.name}</span>
                        </li>
                        {t.detail.map(d => (
                          <li>
                            <small>{d}</small>
                          </li>
                        ))}
                      </>
                    ))}
                  </ul>
                </li>
              ))}
              {/* <li>
                <h4>2015/</h4>
                <ul>
                  <li>
                    <span>양재고등학교 좋업</span>
                  </li>
                  <li>
                    <span>용인대학교 입학</span>
                  </li>
                </ul>
              </li>
              <li>
                <h4>2020/</h4>
              </li>
              <li>
                <h4>2021/</h4>
              </li> */}
            </ul>
          </div>
        </article>
      </div>
    </ProfileContainer>
  );
}
