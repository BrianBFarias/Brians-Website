(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){},23:function(e,a,t){e.exports=t(46)},31:function(e,a,t){},34:function(e,a,t){},36:function(e,a,t){},38:function(e,a,t){},40:function(e,a,t){},42:function(e,a,t){},44:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(20),i=t.n(r),c=t(3),m=(t(19),t(4)),s=["btn--primary","btn--outline","btn--test"],o=["btn--medium","btn--large","btn--large1"],u=function(e){var a=e.children,t=e.type,n=e.onClick,r=e.buttonStyle,i=e.buttonSize,c=s.includes(r)?r:s[0],u=o.includes(i)?i:o[0];return l.a.createElement(m.b,{to:"/resume-pdf",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(c," ").concat(u),onClick:n,type:t},a))};t(31);var b=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(!0),s=Object(c.a)(i,2),o=s[0],b=s[1],p=function(){return r(!1)},d=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(n.useEffect)(function(){d()},[]),window.addEventListener("resize",d),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(m.b,{to:"/",className:"navbar-logo",onClick:p},"Brian Farias"),l.a.createElement("div",{className:"menu-icon",onClick:function(){return r(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/intro",className:"nav-links",onClick:p},"About me")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/hobbies",className:"nav-links",onClick:p},"Hobbies")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/resume-pdf",className:"nav-links-mobile",onClick:p},"Resume"))),o&&l.a.createElement(u,{buttonStyle:"btn--outline"},"Resume"))))},p=(t(9),["btn--primary","btn--outline","btn--test"]),d=["btn--medium","btn--large","btn--large1"],E=function(e){var a=e.children,t=e.type,n=e.onClick,r=e.buttonStyle,i=e.buttonSize,c=p.includes(r)?r:p[0],s=d.includes(i)?i:d[0];return l.a.createElement(m.b,{to:"/intro",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(c," ").concat(s),onClick:n,type:t},a))},g=(t(34),t(16)),h=t.n(g);var f=function(){return l.a.createElement("div",{className:"main-container"},l.a.createElement("video",{autoplay:"autoplay",loop:!0,muted:!0},l.a.createElement("source",{src:"/videos/main1.mp4",type:"video/mp4"})),l.a.createElement("div",{className:"typewriter-container2"},l.a.createElement(h.a,{options:{strings:['print("Hello, World!")'],autoStart:!0,loop:!1,delay:150,pauseFor:99999999}})),l.a.createElement("br",null),l.a.createElement("div",{className:"main-btns"},l.a.createElement(u,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large1"},"Resume"),l.a.createElement(E,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:"/intro"},"Meet me")))};t(36);var v=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(m.b,{className:"cards__item__link",to:e.path,target:"blank"},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var w=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Projects I've worked on"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(v,{src:"images/AVL.jpg",text:"UF student info AVL tree",label:"C++",path:"https://github.com/BrianBFarias/Gator-AVL-Tree"}),l.a.createElement(v,{src:"images/Schedule.jpg",text:"Schedule Chomper",label:"C++/SFML/Python",path:"https://github.com/BrianBFarias/Schedule-Chomper"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(v,{src:"images/Pakudex.jpg",text:"Pakudex: Pokemon holder",label:"Java",path:"https://github.com/BrianBFarias/Pakudex"}),l.a.createElement(v,{src:"images/Cache.jpg",text:"Cache simulation",label:"C++",path:"https://github.com/BrianBFarias/Cache-Simulation"}),l.a.createElement(v,{src:"images/PageRank.jpg",text:"Simplified PageRank Algorithm",label:"C++",path:"https://github.com/BrianBFarias/PageRank-Algorithm"})))))},k=(t(38),t(21),t(22));t(40);function y(){var e=Object(n.useRef)();return l.a.createElement("form",{ref:e,onSubmit:function(a){a.preventDefault(),k.a.sendForm("service_8nvr5g4","website_template",e.current,"SHVR7fKbB9AkOyMWz").then(function(e){console.log(e.text)},function(e){console.log(e.text)}),e.current.reset()}},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"user_name",name:"user_name",placeholder:"Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",id:"user_email",name:"user_email",placeholder:"Email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{id:"message",name:"message",placeholder:"Type message"})),l.a.createElement("button",{className:"btn-send",type:"submit"},"Send"))}var N=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Feel free to contact me via my email I reply fast"),l.a.createElement("div",{className:"container"},l.a.createElement(y,null))),l.a.createElement("div",{class:"footer-links"}),l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("small",{class:"website-rights"},"Thanks for checking out my website"),l.a.createElement("div",{class:"social-icons"},l.a.createElement(m.b,{class:"social-icon-link instagram",to:"https://www.instagram.com/brian.b.f/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"})),l.a.createElement(m.b,{class:"social-icon-link LinkedIn",to:"https://www.linkedin.com/in/bbfarias/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))};var _=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(w,null),l.a.createElement(N,null))},S=t(0);function I(){return l.a.createElement("iframe",{className:"resume-pdf",src:"../images/Resume.pdf"})}t(42);var C=function(){return l.a.createElement("div",{className:"hobbies-container"},l.a.createElement("div",{className:"hobby"},l.a.createElement("img",{src:"./images/swim.jpg",alt:"hobby1"}),l.a.createElement("div",null,l.a.createElement("h2",null,"Swimming"),l.a.createElement("p",null,"During Highschool I was privleged with being captain of the swim team. I really enjoyed my years swimming and when I come back home sometimes ill swim a little just so I can make sure im still in athletic shape "))),l.a.createElement("div",{className:"hobby"},l.a.createElement("img",{src:"./images/SW.jpg",alt:"hobby2"}),l.a.createElement("div",null,l.a.createElement("h2",null,"Working out"),l.a.createElement("p",null,"Since swimming I've picked up working out, where I go to UF's weightlifting gym 5 times a week, never skipping a day. Working out allows me to pipckup on something I persistenetly work on while being able to socialize with friends "))),l.a.createElement("div",{className:"hobby"},l.a.createElement("img",{src:"./images/js.jpg",alt:"hobby3"}),l.a.createElement("div",null,l.a.createElement("h2",null,"New Side Skills"),l.a.createElement("p",null,"I like to explore new environments as a relative \"newby\" to coding I feel it's important for me to explore different sectors of programmming, thus this website. I've used this as not only an oppurtunity for an intro into full stack development but also working with API's and hosting platforms. Althought this website is simple it is my first major project using Javascript and CSS paired with a emailjs API."))))};t(44);var j=function(){return l.a.createElement("div",{className:"about-me-container"},l.a.createElement("div",{className:"avatar"},l.a.createElement("img",{src:"./images/BrianPic.jpg",alt:"Avatar",width:"350px",height:"350px",style:{objectFit:"cover"}})),l.a.createElement("div",{className:"info-container"},l.a.createElement("div",{className:"typewriter-container"},l.a.createElement(h.a,{options:{strings:["Hello, I'm Brian"],autoStart:!0,loop:!1,delay:100,pauseFor:999999}})),l.a.createElement("p",null,"I'm a junior at the University of Florida working on a Bachelors in Computer Science"),l.a.createElement("br",null),l.a.createElement("p",null,"Some of my Skills include C++, Javascript, and Java. I also have experience with react, which this website is built from!"),l.a.createElement("br",null),l.a.createElement("p",null,"I previously worked at a law firm in Florida (RAS PLLC) for 4 summers (8 months total), working in all sectors of the IT department, starting at Inventory to ending as a technician."),l.a.createElement("br",null),l.a.createElement("p",null,"Awarded the Herbert Wertheim College of Engineering Dean\u2019s List my first semester in college and graduated High school with a Cambridge AICE Diploma certificate with Merit."),l.a.createElement("br",null),l.a.createElement("p",null,"I'm looking to improve my skills further while also being able to contribute as a part of a team. Please feel free to contact me directly through email or through my LinkedIn in my main menu screen at the bottom."),l.a.createElement("br",null),l.a.createElement("p",null),l.a.createElement("br",null),l.a.createElement("p",null)))};var x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(b,null),l.a.createElement(S.c,null,l.a.createElement(S.a,{path:"/",element:l.a.createElement(_,null)}),l.a.createElement(S.a,{path:"/resume-pdf",element:l.a.createElement(I,null)}),l.a.createElement(S.a,{path:"/intro",element:l.a.createElement(j,null)}),l.a.createElement(S.a,{path:"/hobbies",element:l.a.createElement(C,null)}))))};i.a.render(l.a.createElement(x,null),document.getElementById("root"))},9:function(e,a,t){}},[[23,2,1]]]);
//# sourceMappingURL=main.c0411ad3.chunk.js.map