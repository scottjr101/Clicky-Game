import React from 'react';
import './styles.css';

function Footer() {
    return <div className="footerCustom container-fluid d-flex justify-content-around align-content-center flex-wrap">  
              <a href="https://github.com/scottjr101/Clicky-Game">
                <button type="button" className="btn btn-dark">GitHub</button>
              </a>
              <a href="https://scottjr101.github.io/">
                <button type="button" className="btn btn-dark">Portfolio</button>
              </a>
            </div>
}

export default Footer;