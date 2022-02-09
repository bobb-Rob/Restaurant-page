

const contact = (() => {

    function sum(){
        console.log(arguments)
        let sum = 0;
        sum = arguments.forEach(element => {
            return sum += element
        });
        return sum
    }

    sum(1,2,4);



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