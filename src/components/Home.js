
import './home.css'
import background from '../texture-background.jpg'

const Home = (() => {

   const couroselImg = [
        {
        image: 'https://onlinelibrary.wiley.com/pb-assets/20487177/Bioactive%20compounds-1615400802.jpg',       
        id: 1,
        },
        {
        image: 'https://www.verywellfamily.com/thmb/-JHHjDC28rgzSLSRngNUJYPoSFk=/2181x1375/filters:no_upscale():max_bytes(150000):strip_icc()/grilled-salmon-steak-garnished-with-green-asparagus--lemon-and-tomatoes-1143931756-d61befab58de4bc780d293b957a2ea5b.jpg',       
        id: 2,
        },
        {
        image: 'https://assets.unenvironment.org/2021-08/louis-hansel-RNmibnLCJAA-unsplash.jpeg',       
        id: 3,
        },
        {
        image: 'https://thedreamafrica.com/wp-content/uploads/2019/07/Ugali-dish.jpg',       
        id: 4,
        },
        {
        image: 'http://cdn.one.org/africa/wp-content/uploads/2014/11/Screen-Shot-2014-11-25-at-15.05.41.png',       
        id: 5,
        },
        {
        image: 'https://www.michaelmorones.org/wp-content/uploads/nigerian-suya-recipe-main-photo.jpg',       
        id: 6,
        },
    ]

   function images(){
     const image = couroselImg.map(img => {        
        return `<div class="mySlides fade" id='image${img.id}'>               
                <img src=${img.image} style="width:100%">                
                </div>
                `
        })
         
        console.log(image.join(' '))
    return image.join(' ');    
    }

    const homeChildren =  () => {       
        const home = document.createElement('div');
        home.classList.add('home-background');
        home.innerHTML = `    
        <div class="slideshow-container">  
        ${images()}      
            
            <a class="prev" >&#10094;</a>
            <a class="next" >&#10095;</a>            
        </div>
        <div class="btn-holder">
            <button class='btn order-btn'>Order now</button>
            <div class='dot-container' style="text-align:center">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
                <span class="dot" onclick="currentSlide(4)"></span>
            </div>
        </div>   
    `;
     return home;
   }

//    Display image on page load
   document.addEventListener('DOMContentLoaded', (e) => {    
    const images = document.getElementsByClassName('mySlides');   
    console.log(images);   

    const displayImage = (index) => {
        console.log('image' + (index + 1) + ':', index)       
        for(let i = 0; i < images.length; i++){
            images[i].style.display = 'none';
            if( i === images[index].id.match(/\d/g).toString()*1){               
                images[index].style.display = 'block';
                console.log(images[index].id);
            }    
        }
    }

    let n = [];    
    displayImage(n.length)
    setInterval(() => {         
        if(n.length < images.length){
            displayImage(n.length);
            n.push(1);
            return;
        }else{
            n = [];
            console.log('n empty again, because, its length is more than five');
        }
        console.log(n);        
        console.log(n.length, ' end of code')
    }, 5000);
   })
   
   return { homeChildren }

})();



export default Home;