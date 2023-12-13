import React from "react";
import "./PopUp.css";
import { Link } from 'react-router-dom';

const PopUps = ({image, title, description, link, tech}) =>{

    return(
    <div className="box">
        <section className="image">
            <img src={image} alt="" />
        </section>
        <section className="info-data">
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </section>
        <section className="tags">
            {link !== '' && (
                <Link
                    className='social-icon-link instagram'
                    to={link}
                    target='_blank'
                    aria-label='Instagram'
                >
                    <i className="fa-brands fa-github" id="github"></i>
                </Link>
            )}
            <p>{tech}</p>
        </section>
    </div>);
}

export default PopUps;