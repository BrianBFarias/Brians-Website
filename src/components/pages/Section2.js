import React from 'react';
import '../../App.css';
import './Section2.css';
import { useState, useEffect} from 'react';

function Section2() { 
    const isMobile = /Mobi/.test(navigator.userAgent);
    const [section, setSection] = useState(0);
    let numOfSelection =3;
    if(isMobile){
        numOfSelection+=1;

    }

    useEffect(() => {
        const intervalId = setInterval(() => {
          moveSelectionUp();
        }, 5000); // Run every 5 seconds
    
        return () => {
          // Clean up the interval when the component unmounts
          clearInterval(intervalId);
        };
      }, [section]);

    function moveSelectionUp(){
        const current = document.getElementsByName(section);
        let next;
        var sectionVal;

        if(section+1 < numOfSelection){
            next = document.getElementsByName(section+1);
            sectionVal = (section+1);
        }
        else{
            next = document.getElementsByName(0);
            sectionVal = (0);
        }
        current[0].className = "fade-out";

        setTimeout(function() {
            setSection(sectionVal);
            next[0].className = "fade-in";

        }, 500);

    }

    function moveSelectionDown(){
        const current = document.getElementsByName(section);
        let next;
        var sectionVal;

        if((section-1 )>= 0){
            next = document.getElementsByName(section-1);
            sectionVal = (section-1);
        }
        else{
            next = document.getElementsByName(numOfSelection-1);
            sectionVal = (numOfSelection-1);
        }
        current[0].className = "fade-out";

        setTimeout(function() {
            setSection(sectionVal);
            next[0].className = "fade-in";

        }, 500);
    }

if(isMobile){
    return (
        <div className='MeSection'>
        <section className='list'>
            <div onClick={moveSelectionUp}  className='before-btn'>
                <i class="fa-solid fa-chevron-right"></i>
            </div>

            <div className='mob-content'>
            {section === 0 && (
            <div name={section} id='section1'>
                <ul>
                    <li>Computer Science at the University of Florida</li>
                    <li>Web Developer</li>
                    <li>Mobile Developer</li>
                    <li>Software Developer</li>

                </ul>
            </div>
        )}
        {section === 1 && (
            <div name={section} id='section2' >
                <h2>Languages</h2>
                <div className='languages'>
                    <img src="images/skills/C++.png" alt="" />
                    <img src="images/skills/C.png" alt="" />
                    <img src="images/skills/Java.png" alt="" />
                    <img src="images/skills/SQL.png" alt="" />
                    <img src="images/skills/JS.png" alt="" />
                    <img src="images/skills/Python.png" alt="" />
                    <img src="images/skills/HTML.svg" alt="" />
                    <img src="images/skills/CSS.png" alt="" />
                </div>
            </div>
        )}
        {section === 2 && (
            <div name={section} id='section2' >
                <h2>Frameworks</h2>
                <div className='languages'>
                    <img src="images/skills/Django.png" alt="" />
                    <img src="images/skills/React.png" alt="" />
                    <img src="images/skills/Strapi.png" alt="" />
                    <img src="images/skills/node.png" alt="" />
                </div>
            </div>
        )}
        {section === 3 && (
            <div name={section} id='section3' >
                <img src="images/BrianPic.jpg" alt="" />
            </div>
        )}
            </div>

            <div onClick={moveSelectionDown} className='next-btn'>
                <i  class="fa-solid fa-chevron-right"></i>
            </div>
        </section>

    </div>
    );
}
      
  return (
    <div className='MeSection'>
        <section>
            <div className='image'>
                <img src="images/BrianPic.jpg" alt="" className='imge'/>
            </div>

        </section>
        <section className='list'>
            <div onClick={moveSelectionUp}  className='before-btn'>
                <i class="fa-solid fa-chevron-right"></i>
            </div>

            <div className='content'>
            {section === 0 && (
            <div name={section} id='section1'>
                <ul>
                    <li>Computer Science at the University of Florida</li>
                    <li>Web Developer</li>
                    <li>Mobile Developer</li>
                    <li>Software Developer</li>

                </ul>
            </div>
        )}
        {section === 1 && (
            <div name={section} id='section2' >
                <h2>Languages</h2>
                <div className='languages'>
                    <img src="images/skills/C++.png" alt="" />
                    <img src="images/skills/C.png" alt="" />
                    <img src="images/skills/Java.png" alt="" />
                    <img src="images/skills/SQL.png" alt="" />
                    <img src="images/skills/JS.png" alt="" />
                    <img src="images/skills/Python.png" alt="" />
                    <img src="images/skills/HTML.svg" alt="" />
                    <img src="images/skills/CSS.png" alt="" />
                </div>
            </div>
        )}
        {section === 2 && (
            <div name={section} id='section2' >
                <h2>Frameworks</h2>
                <div className='languages'>
                    <img src="images/skills/Django.png" alt="" />
                    <img src="images/skills/React.png" alt="" />
                    <img src="images/skills/Strapi.png" alt="" />
                    <img src="images/skills/node.png" alt="" />
                </div>
            </div>
        )}
            </div>

            <div onClick={moveSelectionDown} className='next-btn'>
                <i  class="fa-solid fa-chevron-right"></i>
            </div>
        </section>

    </div>
);
}

export default Section2;
