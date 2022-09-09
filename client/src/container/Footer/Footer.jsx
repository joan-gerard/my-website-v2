import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ username: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [emailIsGiven, setEmailIsGiven] = useState(true);
  const [messageIsGiven, setMessageIsGiven] = useState(true);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    setEmailIsGiven(true);
    setMessageIsGiven(true);
    setEmailIsInvalid(false);

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function validateEmail(userEmail) {
    // eslint-disable-next-line
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
      return (true);
    }
    // eslint-disable-next-line
    setEmailIsInvalid(true)
    return (false);
  }

  const handleSubmit = () => {
    if (formData.message === '') setMessageIsGiven(false);

    if (formData.email === '') {
      setEmailIsGiven(false);
    } else if (formData.message === '') {
      setMessageIsGiven(false);
      return;
    }
    // if (formData.email === '') {
    //   setEmailIsGiven(false);
    //   return;
    // }
    // if (formData.message === '') {
    //   setMessageIsGiven(false);
    //   return;
    // }
    if (formData.email === '') {
      setEmailIsGiven(false);
      return;
    }
    if (formData.message === '') {
      setMessageIsGiven(false);
      return;
    }
    if (formData.email !== '' && !validateEmail(formData.email)) return;

    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => {
        throw Error(err);
      });
  };
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:joan.gerard@outlook.com" className="p-text">joan.gerard@outlook.com</a>
        </div>
        {/* <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
        </div> */}
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email*" name="email" value={email} onChange={handleChangeInput} />
          </div>
          {!emailIsGiven && (<p>Please, enter an email so I can get back to you! 🙂</p>)}
          {emailIsInvalid && (<p>Oops, email is invalid!</p>)}
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message*"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          {!messageIsGiven && (<p>It seems your message is empty!</p>)}
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
          <hr />
          <div className="app__flex app__footer-cta">
            <p>Can I invite you to visit my Linkedin and GitHub pages?</p>
            <div className="app__footer-social">
              <div>
                <a href="https://www.linkedin.com/in/joangerard/" className="app__social-link">
                  <FaLinkedinIn />
                </a>
              </div>
              <div>
                <a href="https://github.com/joan-gerard" className="app__social-link">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
