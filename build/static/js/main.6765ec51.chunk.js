(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){},,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(53)},,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),s=a(18),r=a.n(s),i=a(3),c=(a(27),a(4)),o=["btn--primary","btn--outline","btn--test"],m=["btn--medium","btn--large","btn--large1"],d=function(e){var t=e.children,a=e.type,n=e.onClick,s=e.buttonStyle,r=e.buttonSize,i=o.includes(s)?s:o[0],d=m.includes(r)?r:m[0];return l.a.createElement(c.b,{to:"/resume-pdf",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(i," ").concat(d),onClick:n,type:a},t))},u=(a(29),["btn--primary","btn--section"]),g=["btn--med","btn--large"],E=function(e){var t=e.children,a=e.type,n=e.onClick,s=e.buttonStyle,r=e.buttonSize,i=u.includes(s)?s:u[0],o=g.includes(r)?r:g[0];return l.a.createElement(c.b,{to:"/projects",className:"btn-mobile1"},l.a.createElement("button",{className:"btn ".concat(i," ").concat(o),onClick:n,type:a},t),l.a.createElement("div",{className:"bar"}))};a(31);var h=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(!0),o=Object(i.a)(r,2),m=o[0],u=o[1],g=function(){s(!1)},h=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(n.useEffect)(function(){h()},[]),window.addEventListener("resize",h),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{id:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(c.b,{to:"/",className:"navbar-logo",onClick:g},"BF"),l.a.createElement("div",{className:"menu-icon",onClick:function(){s(!a)}},l.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},l.a.createElement("li",null,l.a.createElement(c.b,{to:"/projects",className:"nav-links-mobile",onClick:g},"Projects")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/resume-pdf",className:"nav-links-mobile",onClick:g},"Resume"))),m&&l.a.createElement(E,{id:"projects",buttonStyle:"btn--section"}," Projects "),m&&l.a.createElement(d,{buttonStyle:"btn--outline"},"Resume"))))};a(8),a(34);var p=function(){return/Mobi/.test(navigator.userAgent)?l.a.createElement("div",{id:"star-field"},l.a.createElement("div",{className:"blur"},l.a.createElement("h1",{id:"mob-name"},"Hello I'm Brian"))):l.a.createElement("div",{id:"star-field"},l.a.createElement("div",{className:"blur"},l.a.createElement("h1",{id:"name"},"Hello I'm Brian")))};a(17);var f=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(c.b,{className:"cards__item__link",to:"/projects"},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"Project Image",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var b=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null," Project Highlights "),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(f,{src:"images/FS.png",text:"File System",label:"C++"}),l.a.createElement(f,{src:"images/Schedule.jpg",text:"Schedule Chomper",label:"C++/SFML/Python"}),l.a.createElement(f,{src:"images/Auction.png",text:"Ecommerce Website",label:"HTML/CSS/Python/SQL"})))))};a(37);var v=function(){var e=/Mobi/.test(navigator.userAgent),t=Object(n.useState)(0),a=Object(i.a)(t,2),s=a[0],r=a[1],c=3;function o(){if("/"==window.location.pathname){var e,t,a=document.getElementsByName(s);s+1<c?(e=document.getElementsByName(s+1),t=s+1):(e=document.getElementsByName(0),t=0),a[0].className="fade-out",setTimeout(function(){r(t),e[0].className="fade-in"},500)}}function m(){if("/"==window.location.pathname){var e,t,a=document.getElementsByName(s);s-1>=0?(e=document.getElementsByName(s-1),t=s-1):(e=document.getElementsByName(c-1),t=c-1),a[0].className="fade-out",setTimeout(function(){r(t),e[0].className="fade-in"},500)}}return e&&(c+=1),Object(n.useEffect)(function(){var e=setInterval(function(){o()},5e3);return function(){clearInterval(e)}},[s]),e?l.a.createElement("div",{className:"MeSection"},l.a.createElement("section",{className:"list"},l.a.createElement("div",{onClick:o,className:"before-btn"},l.a.createElement("i",{class:"fa-solid fa-chevron-right"})),l.a.createElement("div",{className:"mob-content"},0===s&&l.a.createElement("div",{name:s,id:"section1"},l.a.createElement("ul",null,l.a.createElement("li",null,"Computer Science at the University of Florida"),l.a.createElement("li",null,"Web Developer"),l.a.createElement("li",null,"Mobile Developer"),l.a.createElement("li",null,"Software Developer"))),1===s&&l.a.createElement("div",{name:s,id:"section2"},l.a.createElement("h2",null,"Languages"),l.a.createElement("div",{className:"languages"},l.a.createElement("img",{src:"images/skills/C++.png",alt:""}),l.a.createElement("img",{src:"images/skills/C.png",alt:""}),l.a.createElement("img",{src:"images/skills/Java.png",alt:""}),l.a.createElement("img",{src:"images/skills/SQL.png",alt:""}),l.a.createElement("img",{src:"images/skills/JS.png",alt:""}),l.a.createElement("img",{src:"images/skills/Python.png",alt:""}),l.a.createElement("img",{src:"images/skills/HTML.svg",alt:""}),l.a.createElement("img",{src:"images/skills/CSS.png",alt:""}))),2===s&&l.a.createElement("div",{name:s,id:"section2"},l.a.createElement("h2",null,"Frameworks"),l.a.createElement("div",{className:"languages"},l.a.createElement("img",{src:"images/skills/Django.png",alt:""}),l.a.createElement("img",{src:"images/skills/React.png",alt:""}),l.a.createElement("img",{src:"images/skills/Strapi.png",alt:""}),l.a.createElement("img",{src:"images/skills/node.png",alt:""}))),3===s&&l.a.createElement("div",{name:s,id:"section3"},l.a.createElement("img",{src:"images/BrianPic.jpg",alt:""}))),l.a.createElement("div",{onClick:m,className:"next-btn"},l.a.createElement("i",{class:"fa-solid fa-chevron-right"})))):l.a.createElement("div",{className:"MeSection"},l.a.createElement("section",null,l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:"images/BrianPic.jpg",alt:"",className:"imge"}))),l.a.createElement("section",{className:"list"},l.a.createElement("div",{onClick:o,className:"before-btn"},l.a.createElement("i",{class:"fa-solid fa-chevron-right"})),l.a.createElement("div",{className:"content"},0===s&&l.a.createElement("div",{name:s,id:"section1"},l.a.createElement("ul",null,l.a.createElement("li",null,"Computer Science at the University of Florida"),l.a.createElement("li",null,"Web Developer"),l.a.createElement("li",null,"Mobile Developer"),l.a.createElement("li",null,"Software Developer"))),1===s&&l.a.createElement("div",{name:s,id:"section2"},l.a.createElement("h2",null,"Languages"),l.a.createElement("div",{className:"languages"},l.a.createElement("img",{src:"images/skills/C++.png",alt:""}),l.a.createElement("img",{src:"images/skills/C.png",alt:""}),l.a.createElement("img",{src:"images/skills/Java.png",alt:""}),l.a.createElement("img",{src:"images/skills/SQL.png",alt:""}),l.a.createElement("img",{src:"images/skills/JS.png",alt:""}),l.a.createElement("img",{src:"images/skills/Python.png",alt:""}),l.a.createElement("img",{src:"images/skills/HTML.svg",alt:""}),l.a.createElement("img",{src:"images/skills/CSS.png",alt:""}))),2===s&&l.a.createElement("div",{name:s,id:"section2"},l.a.createElement("h2",null,"Frameworks"),l.a.createElement("div",{className:"languages"},l.a.createElement("img",{src:"images/skills/Django.png",alt:""}),l.a.createElement("img",{src:"images/skills/React.png",alt:""}),l.a.createElement("img",{src:"images/skills/Strapi.png",alt:""}),l.a.createElement("img",{src:"images/skills/node.png",alt:""})))),l.a.createElement("div",{onClick:m,className:"next-btn"},l.a.createElement("i",{class:"fa-solid fa-chevron-right"}))))};a(39);var S=function(){var e=/Mobi/.test(navigator.userAgent);return document.addEventListener("DOMContentLoaded",function(){for(var e=document.querySelectorAll("#tile1"),t=document.querySelectorAll("#tile2"),a=0;a<e.length;a++)e[a].style.animationPlayState="paused";for(a=0;a<t.length;a++)t[a].style.animationPlayState="paused"}),e?l.a.createElement("div",{className:"ABMC"},l.a.createElement("div",{className:"mob-info-mat"},l.a.createElement("div",{id:"tile1"},l.a.createElement("h2",null,"Full-Stack Developer for The Agency at UF")),l.a.createElement("div",{id:"tile2"},l.a.createElement("h2",null,"Scrum Master for CaSMM, Cloud-Based Programming Interface")),l.a.createElement("div",{id:"tile1"},l.a.createElement("h2",null," IT Help Desk Technician at RAS LLC")),l.a.createElement("div",{id:"tile2"},l.a.createElement("h2",null,"Harvard's CS50 Web Programming with Python")),l.a.createElement("div",{id:"tile1"},l.a.createElement("h2",null," 2023 Gator Hackathon"))),l.a.createElement("div",{className:"mob-title-box1"},l.a.createElement("h2",null,"Experience"))):l.a.createElement("div",{className:"ABMC"},l.a.createElement("div",{className:"info-mat"},l.a.createElement("div",{id:"tile1"},l.a.createElement("h2",null,"Full-Stack Developer for The Agency at UF")),l.a.createElement("div",{id:"tile2"},l.a.createElement("h2",null,"Scrum Master for CaSMM, Cloud-Based Programming Interface")),l.a.createElement("div",{id:"tile1"},l.a.createElement("h2",null," IT Help Desk Technician at RAS LLC")),l.a.createElement("div",{id:"tile2"},l.a.createElement("h2",null,"Harvard's CS50 Web Programming with Python")),l.a.createElement("div",{id:"tile1"},l.a.createElement("h2",null," 2023 Gator Hackathon"))),l.a.createElement("div",{className:"title-box1"},l.a.createElement("h2",null,"Experience")))};a(41);var w=function(){var e=/Mobi/.test(navigator.userAgent);return document.addEventListener("DOMContentLoaded",function(){for(var e=document.querySelectorAll("#tile1"),t=document.querySelectorAll("#tile2"),a=0;a<e.length;a++)e[a].style.animationPlayState="paused";for(a=0;a<t.length;a++)t[a].style.animationPlayState="paused"}),e?l.a.createElement("div",{className:"ABMD",id:"mob-3"},l.a.createElement("div",{className:"info-mat"},l.a.createElement(c.b,{to:"/projects"},l.a.createElement("img",{src:"images/casmm.png",alt:""}))),l.a.createElement("div",{className:"mob-title-box1"},l.a.createElement("h2",null,"CaSMM"))):l.a.createElement("div",{className:"ABMD",id:"sec-3"},l.a.createElement("div",{className:"title-box1"},l.a.createElement("h2",null,"CaSMM is a cloud based programming interface. ",l.a.createElement("br",null),"Led team of 6 during 2 sprints while creating Teacher View sector of this project. ")),l.a.createElement("div",{className:"info-mat"},l.a.createElement(c.b,{to:"https://github.com/Team-10g/Emerald-Project17-10g"},l.a.createElement("img",{src:"images/casmm.png",alt:""}))))};a(43);var k=function(){return/Mobi/.test(navigator.userAgent)?l.a.createElement("section",{id:"live-proj",className:"mob-lp"},l.a.createElement("div",{className:"info-mat"},l.a.createElement("div",{className:"cards_container"},l.a.createElement(f,{src:"images/SR.png",text:"(Beta) Hot Sauce rating site",label:"Python/JS/HTML/CSS",path:"https://saucer-roster.up.railway.app/"}))),l.a.createElement("div",{className:"title-box"},l.a.createElement("h2",null,"Live Projects"))):l.a.createElement("section",{id:"live-proj",className:"lp"},l.a.createElement("div",{className:"title-box"},l.a.createElement("h2",null,"Live Projects")),l.a.createElement("div",{className:"info-mat"},l.a.createElement("div",{className:"cards_container"},l.a.createElement(f,{src:"images/SR.png",text:"(Beta) Hot Sauce rating site",label:"Python/JS/HTML/CSS",path:"https://saucer-roster.up.railway.app/"}))))};var y=function(){return console.log(window.location.pathname),window.addEventListener("scroll",function(){window.onscroll=function(){var e=document.getElementById("stat");if("/"==window.location.pathname){e.className="status";var t=document.querySelectorAll("#tile1"),a=document.querySelectorAll("#tile2"),n=document.getElementById("navbar"),l=document.querySelector(".cards"),s=document.querySelector(".MeSection"),r=document.getElementById("live-proj"),i=document.querySelector(".ABMC");if(window.innerHeight+window.scrollY>=document.body.offsetHeight-750){for(var c=0;c<a.length;c++)a[c].style.animationPlayState="running";for(var c=0;c<t.length;c++)t[c].style.animationPlayState="running"}if(window.scrollY<340&&(n.style.top="0px"),window.scrollY>340){var o=339-window.scrollY;n.style.top="".concat(o,"px"),e.className="status"}else e.className="status-gone";var m=window.scrollY,d=s.offsetHeight-n.offsetHeight,u=d+l.offsetHeight,g=u+r.offsetHeight,E=g+i.offsetHeight;m>d&&m<u?(console.log("entered"),document.getElementById("myBar").style.width="25%"):document.getElementById("myBar").style.width=m>u&&m<g?"50%":m>g&&m<E?"75%":m>E?"100%":"0%"}else e.className="status-gone"}}),l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(v,null),l.a.createElement(b,null),l.a.createElement(k,null),l.a.createElement(S,null),l.a.createElement(w,null))},N=a(0);function j(){return l.a.createElement("iframe",{className:"resume-pdf",src:"../images/Resume.pdf"})}a(45),a(47);var C=function(e){var t=e.image,a=e.title,n=e.description,s=e.link,r=e.tech;return l.a.createElement("div",{className:"box"},l.a.createElement("section",{className:"image"},l.a.createElement("div",{className:"image-box"},l.a.createElement("img",{src:t,alt:""}))),l.a.createElement("section",{className:"info-data"},l.a.createElement("h3",null,a),l.a.createElement("div",{className:"line"}),l.a.createElement("p",null,n)),l.a.createElement("section",{className:"tags"},""!==s&&l.a.createElement(c.b,{className:"social-icon-link instagram",to:s,target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{className:"fa-brands fa-github",id:"github"})),l.a.createElement("p",null,r)))},P=(a(49),function(e){var t=e.src,a=e.text,n=e.path,s=e.description,r=e.tech,i=e.color,c=e.setVisible,o=e.setSelected,m=e.setTech,d=e.setImage,u=e.setLink,g=e.setDescriptor;return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cardItem",onClick:function(){c(!0),o(a),d(t),u(n),g(s),m(r)}},l.a.createElement("div",{className:"section"},l.a.createElement("img",{src:t,alt:"",className:"image"}),l.a.createElement("div",{className:"blur"},l.a.createElement("h1",{className:"title ".concat(i)},a)))))});var L=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(""),c=Object(i.a)(r,2),o=c[0],m=c[1],d=Object(n.useState)(""),u=Object(i.a)(d,2),g=u[0],E=u[1],h=Object(n.useState)(""),p=Object(i.a)(h,2),f=p[0],b=p[1],v=Object(n.useState)(""),S=Object(i.a)(v,2),w=S[0],k=S[1],y=Object(n.useState)(""),N=Object(i.a)(y,2),j=N[0],L=N[1],B=Object(n.useRef)();return Object(n.useEffect)(function(){if(a){var e=function(e){B.current.contains(e.target)||(s(!1),m(""))};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}},[a]),l.a.createElement("div",{id:"page"},a?l.a.createElement("div",{className:"pop-up"},l.a.createElement("div",{className:"info",ref:B},l.a.createElement("i",{class:"fa-solid fa-xmark",id:"close",onClick:function(){return s(!1)}}),l.a.createElement(C,{image:g,title:o,description:f,link:w,tech:j}))):null,l.a.createElement("div",{id:"body"},l.a.createElement("ul",{className:"wrapper"},l.a.createElement(P,{src:"images/Auction.png",text:"Ecommerce Website",path:"https://github.com/BrianBFarias/ecommerce-website.git",description:"A part of Harvard's CS50 Intro to Web programming with Python, this website mimicks a auction website.\n            User's are able to list items for sale at any desirable price while choosing a category for their item. When shoping,\n            Users can Purchase/Bid on items or browse through different categories. The below link provides a Demo of the Project.",tech:"HTML/Django/Python/CSS/Javascript",setVisible:s,setSelected:m,setImage:E,setLink:k,setTech:L,setDescriptor:b,color:"light"}),l.a.createElement(P,{src:"images/Schedule.jpg",text:"Schedule Chomper",path:"https://github.com/BrianBFarias/Schedule-Chomper",description:"With a variety of classes to choose from, and each class needing a variety of different prereqs, its hard to plan a schedule more than a year in advance.\n            Schedule Chomper was created as a final Project for Data Structures and Algorithm at UF. As a part of a team of 3 we were able to create\n            an application that allows students to build their entire college course plan of any size they desire. Students can choose how many credits they wish to take\n            for a select number of semesters. Upon reaching the end of your semester plan, with the implemmentation of Topological Sorting and Bin Packing, this\n            application condenses your schedule to as few semesters as possible.",tech:"C++/SFML/Python",setVisible:s,setSelected:m,setImage:E,setLink:k,setTech:L,setDescriptor:b,color:"light"}),l.a.createElement(P,{src:"images/network.png",text:"Networking Site",path:"https://github.com/BrianBFarias/Linker",description:"Apart of Harvard's CS50 Intro to Web programming with Python course, this project was created to serve as a social media website.\n            Similar to twitter/Instagram, this website offers users to follow one another and aquire a following too. Users can see a followers page of all the contents posted by whom\n            they're following. User's can like other posts and posts are organized based on most recently posted.",tech:"HTML/Django/Python/CSS/Javascript",setVisible:s,setSelected:m,setImage:E,setLink:k,setTech:L,setDescriptor:b,color:"light"}),l.a.createElement(P,{src:"images/AVL.jpg",text:"Student Info AVL Tree",path:"https://github.com/BrianBFarias/Gator-AVL-Tree",description:"Student AVL tree Project for Data Structures and Algorithms at UF. This algorithm creates a tree of student data\n            It ensures the tree stays balanced at all times while adding or removing elements from it.",tech:"C++",setVisible:s,setSelected:m,setImage:E,setLink:k,setTech:L,setDescriptor:b,color:"dark"}),l.a.createElement(P,{src:"images/Pakudex.jpg",text:"Pakudex",path:"https://github.com/BrianBFarias/Pakudex",description:"Pokemon storage application. User's can store up to 20 Pokemons while being able to either Evolve or remove them\n            from their list. They can also request a sorted list of all pokemons currently aquired.",tech:"Java",setVisible:s,setSelected:m,setImage:E,setLink:k,setTech:L,setDescriptor:b,color:"light"}),l.a.createElement(P,{src:"images/PageRank.jpg",text:"Simplified PageRank Algorithm",path:"https://github.com/BrianBFarias/PageRank-Algorithm",description:"A project for Data Structures and Algorithms at UF. This Page ranking algorithm takes in a list of pages with a variety of connections between each page. Pages are processed and returned in order of \n            their power index.",tech:"C++",setVisible:s,setSelected:m,setImage:E,setLink:k,setTech:L,setDescriptor:b,color:"dark"}),l.a.createElement(P,{src:"images/SR.png",text:"Saucer Roster",path:"https://github.com/BrianBFarias/SaucerRoster",description:"Created for Harvards Web Programming with Python as a final Project. Saucer Roster is a sophisticated website with the main goal of ranking sauces.\n            Users aquire keys as they rank more sauces. The more keys aquired the more accurate their 'reccomended' section is. This website also provides in-depth filtering,\n            with 20+ different filtering options. The final feature is a reddit influenced commenting functionality on all sauces.",tech:"HTML/Django/Python/CSS/Javascript",setVisible:s,setSelected:m,setImage:E,setLink:k,setTech:L,setDescriptor:b,color:"light"}),l.a.createElement(P,{src:"images/casmm.png",text:"CaSMM",path:"https://github.com/Team-10g/Emerald-Project17-10g",description:"This project was a part of UF's Intro to Software Engeering course, working with a team of 6. As the Scrum Master for this project, I was in charge of handling\n            repo access and control for all members as well as creating issues for the project board and hosting weekly coding meetings to help less experienced members with Full-Stack development.\n            We applied Agile Methodologies for a total of 3 weeks, broken into 2 seperate sprints to create the Teacher-View section of this project.",tech:"HTML/Django/Python/CSS/Javascript",setVisible:s,setSelected:m,setImage:E,setLink:k,setTech:L,setDescriptor:b,color:"light"}),l.a.createElement(P,{src:"images/FS.png",text:"File System",path:"",description:"This project was a part of UF's Operating Systems course, it involves creating a userspace filesystem daemon using the FUSE API to enable read and write access \n            to files and directories within WAD (Where's All the Data) format. The implementation serves as a critical prototype \n            to demonstrate proof-of-concept functionality, with provided sample WAD files.",tech:"C++/FUSE API",setVisible:s,setSelected:m,setImage:E,setLink:k,setTech:L,setDescriptor:b,color:"light"}))))};a(51);var B=function(){return/Mobi/.test(navigator.userAgent)?l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"mob-social-media-wrap"},l.a.createElement("div",null,l.a.createElement("p",null,"Connect with me ")),l.a.createElement("div",{class:"social-icons"},l.a.createElement(c.b,{class:"social-icon-link",to:"https://www.linkedin.com/in/bbfarias/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"})),l.a.createElement(c.b,{class:"social-icon-link instagram",to:"https://www.instagram.com/brian.b.f/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"}))),l.a.createElement("div",null,l.a.createElement("p",null,"B.farias1@ufl.edu"))))):l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("div",null,l.a.createElement("p",null,"Connect with me ")),l.a.createElement("div",{class:"social-icons"},l.a.createElement(c.b,{class:"social-icon-link",to:"https://www.linkedin.com/in/bbfarias/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"})),l.a.createElement(c.b,{class:"social-icon-link instagram",to:"https://www.instagram.com/brian.b.f/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"}))),l.a.createElement("div",null,l.a.createElement("p",null,"B.farias1@ufl.edu")))))};var T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null,l.a.createElement(h,null),l.a.createElement("div",{id:"stat",className:"status"},l.a.createElement("div",{class:"progress-bar",id:"myBar"})),l.a.createElement(N.c,null,l.a.createElement(N.a,{path:"/",element:l.a.createElement(y,null)}),l.a.createElement(N.a,{path:"/resume-pdf",element:l.a.createElement(j,null)}),l.a.createElement(N.a,{path:"/projects",element:l.a.createElement(L,null)})),l.a.createElement(B,null)))};r.a.render(l.a.createElement(T,null),document.getElementById("root"))}],[[19,2,1]]]);
//# sourceMappingURL=main.6765ec51.chunk.js.map