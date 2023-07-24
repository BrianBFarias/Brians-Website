import React from 'react';
import '../../App.css';
import './Intro.css';

function section2() {
  const isMobile = /Mobi/.test(navigator.userAgent);

  if(isMobile){
    return (
        <div>
            hello
        </div>
    );
  }
  return (
    <div>
        hello
    </div>
  );
}

export default section2;
