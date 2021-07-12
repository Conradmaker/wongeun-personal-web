import React, { useState } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import axios from 'axios';
import { ContactContainer } from './styles';
import SideTitle from 'components/Typography/SideTitle';
import PageTitle from 'components/Typography/PageTitle';
import useInput from 'hooks/useInput';

export default function Contact(): JSX.Element {
  const [name, onChangeName, setName] = useInput('');
  const [email, onChangeEmail, setEmail] = useInput('');
  const [message, onChangeMessage, setMessage] = useInput('');
  const [emailSending, setEmailSending] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setEmailSending('전송중..');
      const { data } = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: process.env.NEXT_PUBLIC_SMTP_SEVICE_ID,
        template_id: process.env.NEXT_PUBLIC_SMTP_TEMPLATE_ID,
        user_id: process.env.NEXT_PUBLIC_SMTP_USER_ID,
        accessToken: process.env.NEXT_PUBLIC_SMTP_ACCESS_TOKEN,
        template_params: {
          name,
          message,
          email,
        },
      });
      if (data) {
        setEmailSending('감사합니다!');
        setEmail('');
        setName('');
        setMessage('');
        setTimeout(() => {
          setEmailSending('');
        }, 1400);
      }
    } catch (e) {
      alert(e.res.data);
    }
  };

  return (
    <ContactContainer id="contact">
      <div className="inner page__section">
        <SideTitle value="CONTACT" />
        <PageTitle width={600} height={380}>
          <p>Thank you</p>
          <h1>
            <em>감</em>사합니다
          </h1>
          <h2>
            개선사항이나 궁금한점을
            <br /> 보내주세요
          </h2>
        </PageTitle>
        <form onSubmit={onSubmit} className="email__form">
          <input type="text" placeholder="NAME" required onChange={onChangeName} />
          <input type="email" placeholder="EMAIL" required onChange={onChangeEmail} />
          <textarea
            rows={10}
            placeholder="MESSAGE"
            required
            onChange={onChangeMessage}
          ></textarea>
          <button className="send-button" type="submit" value="SEND">
            <div className="alt-send-button">
              {emailSending ? (
                <p>{emailSending}</p>
              ) : (
                <>
                  <RiSendPlaneFill />
                  <span className="send-text">SEND</span>
                </>
              )}
            </div>
          </button>
        </form>
      </div>
    </ContactContainer>
  );
}
