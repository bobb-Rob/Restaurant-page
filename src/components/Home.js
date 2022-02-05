
import './home.css'
import background from '../texture-background.jpg'

class Home {

   static homeChildren =  () => {       
    const home = document.createElement('div');
    home.classList.add('home-background');
    home.innerHTML = `    
    <h1 class='home-caption' >Get all your african dishes here</h1>
    <button class='btn order-btn'  >Order now</button>
    
    `;



    return home;
   }



};



export default Home;