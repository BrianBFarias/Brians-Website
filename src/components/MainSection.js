import React, { useEffect } from "react";
import '../App.css';
import './MainSection.css';

function MainSection() {
  const isMobile = /Mobi/.test(navigator.userAgent);

  if(isMobile){
    return (
      <div id='star-field'>
        <h1 id="mob-name">
          Hello I'm Brian
        </h1>
      </div>
    );
  }

  return (
    <div id='star-field' >
      <div className="blur">
      <h1 id="name">
        Hello I'm Brian
      </h1>
      </div>

    </div>
  );
}

export default MainSection;
