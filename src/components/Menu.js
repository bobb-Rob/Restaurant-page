import './menu.css';
import foodItems from './data';


const Menu = (() => {

    const itemHolder = () => {
       const food = foodItems.map(item => {
           return `
            <div  class="food-desc-holder" >
                <div class="food-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="food-name">${item.name}</div>
                <p>&#8358;${item.cost}</p>
            </div>        
            `;
       });                   
        return food.join(' ');
    }


    const menuChildren = () => {
        const menu = document.createElement('div');
        menu.classList.add('menu-background');

        menu.innerHTML = `
            ${itemHolder()}
        `
       
        return menu;
    }





return { menuChildren  }
})();


export default Menu;