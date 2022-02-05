import JRlogo from '../logo.png'
import './navBar.css'

export const navigationBar = (() => {   
    
    const createNavBar = () => {       
        const navContainer = document.createElement('div')
        navContainer.classList.add('nav-container');       
        navContainer.innerHTML = `                
            <div class="logo-wrapper">
                <img src="${JRlogo}" alt="JR Kitchen Logo">
            </div>
            <nav class="tab-wrapper"> 
                <div class='link-wrapper'>              
                    <a href='#' class="nav-tab home activeSection" id="home-btn">
                    Home                    
                    </a>
                </div>
                <div class='link-wrapper'>
                    <a href='#' class="nav-tab menu" id="menu-btn">
                    Menu
                    </a>
                </div>
                <div class='link-wrapper'>
                    <a href='#' class="nav-tab contact" id="contact-btn">
                    Contact
                    </a>  
                </div>                
            </nav>              
        `;   
        return navContainer;
    }    

    return { createNavBar}

})()

