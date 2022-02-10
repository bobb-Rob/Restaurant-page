

const contact = (() => {

    
    const contactChildren = () => {
        const contact = document.createElement('div');
        contact.innerHTML = `
        <h1 class='contact' ></h1>       
        
        `;

        return contact;
    }

    return { contactChildren }

})();

console.log(contact)

export default contact;