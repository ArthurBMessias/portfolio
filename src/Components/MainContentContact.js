import React from 'react';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import ContactStyle from './ContactStyle.css';

function MainContentContact() {
  return (
    <div className={ContactStyle}>
      <div>
        <h1 className="contactMe"> Contact Me On...</h1>
        <a style={{color: "inherit"}}
          className="linkedIn"
          href="https://www.linkedin.com/in/arthur-bernardo-messias/"
        >
          <LinkedIn style={{ fontSize: 400 }} />
        </a>
        <a style={{color: "inherit"}}className="gitHub" href="https://github.com/ArthurBMessias">
          <GitHub  style={{ fontSize: 400 }}/>
        </a>
      </div>
      <div className='workT'> and let's work together!</div>
    </div>
  );
}

export default MainContentContact;
