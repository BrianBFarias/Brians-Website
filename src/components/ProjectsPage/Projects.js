import React, { useState, useRef, useEffect } from 'react';
import './Projects.css';
import PopUp from "./PopUp";
import Card from './Card';

function Projects() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('');
  const [image, setImage] = useState('');
  const [descriptor, setDescriptor] = useState('');
  const [link, setLink] = useState('');
  const [tech, setTech] = useState('');

  const menuRef = useRef();

  useEffect(() => {
    if(!visible){
        return
    }
    let handler = (e) => {

      if (!menuRef.current.contains(e.target)) {
        setVisible(false);
        setSelected('');
      }
    };
    document.addEventListener("mousedown", handler);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [visible]);

  return (
    <div id='page'>
      {visible ?
        <div className='pop-up'>
          <div className="info" ref={menuRef}>
            <i class="fa-solid fa-xmark" id='close' onClick={() => setVisible(false)}></i>
            <PopUp
            image = {image}
            title={selected}
            description = {descriptor}
            link = {link}
            tech = {tech}
            />
          </div>

        </div>
        : null}
      <div id='body'>
        <ul className='wrapper'>
          <Card
            src='images/Auction.png'
            text='Ecommerce Website'
            path='https://github.com/BrianBFarias/ecommerce-website.git'
            description = {`A part of Harvard's CS50 Intro to Web programming with Python, this website mimicks a auction website.
            User's are able to list items for sale at any desirable price while choosing a category for their item. When shoping,
            Users can Purchase/Bid on items or browse through different categories. The below link provides a Demo of the Project.`}
            tech = "HTML/Django/Python/CSS/Javascript"
            setVisible={setVisible}
            setSelected={setSelected}
            setImage = {setImage}
            setLink = {setLink}
            setTech = {setTech}
            setDescriptor = {setDescriptor}
            color = {'light'}
          />
          <Card
            src='images/Schedule.jpg'
            text='Schedule Chomper'
            path='https://github.com/BrianBFarias/Schedule-Chomper'
            description = {`With a variety of classes to choose from, and each class needing a variety of different prereqs, its hard to plan a schedule more than a year in advance.
            Schedule Chomper was created as a final Project for Data Structures and Algorithm at UF. As a part of a team of 3 we were able to create
            an application that allows students to build their entire college course plan of any size they desire. Students can choose how many credits they wish to take
            for a select number of semesters. Upon reaching the end of your semester plan, with the implemmentation of Topological Sorting and Bin Packing, this
            application condenses your schedule to as few semesters as possible.`}
            tech = "C++/SFML/Python"
            setVisible={setVisible}
            setSelected={setSelected}
            setImage = {setImage}
            setLink = {setLink}
            setTech = {setTech}
            setDescriptor = {setDescriptor}
            color = {'light'}
          />
            <Card
            src='images/network.png'
            text='Networking Site'
            path='https://github.com/BrianBFarias/Linker'
            description = {`Apart of Harvard's CS50 Intro to Web programming with Python course, this project was created to serve as a social media website.
            Similar to twitter/Instagram, this website offers users to follow one another and aquire a following too. Users can see a followers page of all the contents posted by whom
            they're following. User's can like other posts and posts are organized based on most recently posted.`}
            tech = "HTML/Django/Python/CSS/Javascript"
            setVisible={setVisible}
            setSelected={setSelected}
            setImage = {setImage}
            setLink = {setLink}
            setTech = {setTech}
            setDescriptor = {setDescriptor}
            color = {'light'}

          />
          <Card
            src='images/AVL.jpg'
            text='Student Info AVL Tree'
            path='https://github.com/BrianBFarias/Gator-AVL-Tree'
            description = {`Student AVL tree Project for Data Structures and Algorithms at UF. This algorithm creates a tree of student data
            It ensures the tree stays balanced at all times while adding or removing elemnts from it.`}
            tech = "C++"
            setVisible={setVisible}
            setSelected={setSelected}
            setImage = {setImage}
            setLink = {setLink}
            setTech = {setTech}
            setDescriptor = {setDescriptor}
            color = {'dark'}
          />
          <Card
            src='images/Pakudex.jpg'
            text='Pakudex'
            path='https://github.com/BrianBFarias/Pakudex'
            description = {`Pokemon storage application. User's can store up to 20 Pokemons while being able to either Evolve or remove them
            from their list. They can also request a sorted list of all pokemons currently aquired.`}
            tech = "Java"
            setVisible={setVisible}
            setSelected={setSelected}
            setImage = {setImage}
            setLink = {setLink}
            setTech = {setTech}
            setDescriptor = {setDescriptor}
            color = {'light'}
          />
          <Card
            src='images/PageRank.jpg'
            text='Simplified PageRank Algorithm'
            path='https://github.com/BrianBFarias/PageRank-Algorithm'
            description = {`A project for Data Structures and Algorithms at UF. This Page ranking algorithm takes in a list of pages with a variety of connections between each page. Pages are processed and returned in order of 
            their power index.`}
            tech = "C++"
            setVisible={setVisible}
            setSelected={setSelected}
            setImage = {setImage}
            setLink = {setLink}
            setTech = {setTech}
            setDescriptor = {setDescriptor}
            color = {'dark'}
          />
          <Card
            src='images/SR.png'
            text='Saucer Roster'
            path='https://github.com/BrianBFarias/SaucerRoster'
            description = {`Created for Harvards Web Programming with Python as a final Project. Saucer Roster is a sophisticated website with the main goal of ranking sauces.
            Users aquire keys as they rank more sauces. The more keys aquired the more accurate their 'reccomended' section is. This website also provides in-depth filtering,
            with 20+ different filtering options. The final feature is a reddit influenced commenting functionality on all sauces.`}
            tech = "HTML/Django/Python/CSS/Javascript"
            setVisible={setVisible}
            setSelected={setSelected}
            setImage = {setImage}
            setLink = {setLink}
            setTech = {setTech}
            setDescriptor = {setDescriptor}
            color = {'light'}
          />
          <Card
            src='images/casmm.png'
            text='CaSMM'
            path='https://github.com/Team-10g/Emerald-Project17-10g'
            description = {`This project was a part of UF's Intro to Software Engeering course, working with a team of 6. As the Scrum Master for this project, I was in charge of handling
            repo access and control for all members as well as creating issues for the project board and hosting weekly coding meetings to help less experienced members with Full-Stack development.
            We applied Agile Methodologies for a total of 3 weeks, broken into 2 seperate sprints to create the Teacher-View section of this project.`}
            tech = "HTML/Django/Python/CSS/Javascript"
            setVisible={setVisible}
            setSelected={setSelected}
            setImage = {setImage}
            setLink = {setLink}
            setTech = {setTech}
            setDescriptor = {setDescriptor}
            color = {'light'}
          />
          <Card
            src='images/FS.png'
            text='File System'
            path=''
            description = {`This project was a part of UF's Operating Systems course, it involves creating a userspace filesystem daemon using the FUSE API to enable read and write access 
            to files and directories within WAD (Where's All the Data) format. The implementation serves as a critical prototype 
            to demonstrate proof-of-concept functionality, with provided sample WAD files.`}
            tech = "C++/FUSE API"
            setVisible={setVisible}
            setSelected={setSelected}
            setImage = {setImage}
            setLink = {setLink}
            setTech = {setTech}
            setDescriptor = {setDescriptor}
            color = {'light'}
          />
        </ul>
      </div>
    </div>
  );
}

export default Projects;
