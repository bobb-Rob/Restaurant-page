
import './home.css'
import background from '../texture-background.jpg'

class Home {

    static couroselImg = [{
        image: '',
        caption: '',
        

    }]

   static homeChildren =  () => {       
    const home = document.createElement('div');
    home.classList.add('home-background');
    home.innerHTML = `    
        <div class="slideshow-container">
            <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img src=" " style="width:100%">
                <div class="text">Caption Text</div>
            </div>
        </div>
            <button class='btn order-btn'  >Order now</button>
    
    `;



    return home;
   }



};



export default Home;