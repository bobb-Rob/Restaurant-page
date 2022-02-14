import { navigationBar } from "./components/NavBar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import contact from "./components/Contact";
import './App.css'


const appUI = (() => {
    const pageConatainer = document.getElementById('root');
   
    //Insert NavBar    
    const navBar = navigationBar.createNavBar('Home', 'Menu', 'Contact');
    pageConatainer.appendChild(navBar);

    //Create hero section page container
    const heroContainer = document.createElement('div');
    heroContainer.id = 'hero-container';
    pageConatainer.appendChild(heroContainer);

    //Create Sections
    function createSection(id){
        const el = document.createElement('section');
        el.id = `${id}`;
        el.className = `${id}-wrapper section`;
        return el;
    }      

    //Home section
    const homeSection = createSection('home');
        // Select home as default display section
        homeSection.classList.add('now-displayed');
        homeSection.appendChild(Home.homeChildren());
       

    //Menu section
    const menuSection = createSection('menu');
    menuSection.appendChild(Menu.menuChildren())
   

    //Contact Section
    const contactSection = createSection('contact');
    contactSection.appendChild(contact.contactChildren());
    console.log(contactSection);

    heroContainer.appendChild(homeSection);
    heroContainer.appendChild(menuSection);
    heroContainer.appendChild(contactSection);

   // Display Section Event
    function toggleActiveSection(element, nodeList, className){
        nodeList.forEach(el => {          
            el.classList.remove(className);
            if(el.id === element.id){
                el.classList.add(className);
            }
        });   
    }

    document.querySelector('.home').addEventListener('click', (e) => {
        toggleActiveSection(document.getElementById('home'), 
        document.querySelectorAll('.section'),
        'now-displayed'
        );
        toggleActiveSection(document.getElementById('home-btn'), 
        document.querySelectorAll('.nav-tab'),
        'activeSection');  
    });

    document.querySelector('.menu').addEventListener('click', (e) => {
        toggleActiveSection(document.getElementById('menu'),
        document.querySelectorAll('.section'),
        'now-displayed'
        ); 
        toggleActiveSection(document.getElementById('menu-btn'), 
        document.querySelectorAll('.nav-tab'),
        'activeSection');  
    });
    
    document.querySelector('.contact').addEventListener('click', (e) => {
        toggleActiveSection(document.getElementById('contact'),
        document.querySelectorAll('.section'),
        'now-displayed'
        );
        toggleActiveSection(document.getElementById('contact-btn'), 
        document.querySelectorAll('.nav-tab'),
        'activeSection');  
    });


    return {  }

})()




export default appUI;