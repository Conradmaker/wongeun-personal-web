import React from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import { ContactContainer } from './styles';
import SideTitle from 'components/Typography/SideTitle';
import PageTitle from 'components/Typography/PageTitle';

export default function Contact(): JSX.Element {
  return (
    <ContactContainer>
      <div className="inner page__section">
        <SideTitle value="CONTACT" />
        <PageTitle width={600} height={380}>
          <p>Thank you</p>
          <h1>
            <em>감</em>사합니다
          </h1>
          <h2>
            개선사항이나 궁금한점이 있으시다면
            <br /> 연락 부탁 드립니다
            <br />
            TEL. 010-8731-0337
          </h2>
        </PageTitle>
        <form className="email__form">
          <input type="text" placeholder="NAME" required />
          <input type="email" placeholder="EMAIL" required />
          <textarea rows={10} placeholder="MESSAGE" name="message" required></textarea>
          <button className="send-button" type="submit" value="SEND">
            <div className="alt-send-button">
              <RiSendPlaneFill />
              <span className="send-text">SEND</span>
            </div>
          </button>
        </form>
      </div>
    </ContactContainer>
  );
}
