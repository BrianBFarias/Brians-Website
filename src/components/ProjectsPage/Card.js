import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css";

const Card = ({src, text, path, description, tech, color,
   setVisible, setSelected, setTech, setImage, setLink, setDescriptor}) =>{
    
function selected(){
    setVisible(true);
    setSelected(text);
    setImage(src);
    setLink(path);
    setDescriptor(description);
    setTech(tech);
}

return (
    <>
      <li className='cardItem' onClick={selected}>
          <div className='section'>
            <img src={src} alt="" className='image' />
            <div className='blur'>
                <h1 className={`title ${color}`}>{text}</h1>
            </div>
          </div>
      </li>
    </>
  );
}

export default Card;
