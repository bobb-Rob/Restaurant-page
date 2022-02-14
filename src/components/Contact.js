import './contact.css'

function initMap() {
    // The location of port Harcourt
    const portHarcourt = { lat: 4.827567, lng: 6.999109 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: portHarcourt,
    });

    // The marker, positioned at Port Harcourt
    const marker = new google.maps.Marker({
        position: portHarcourt,
        map: map,
      });
}
 


const contact = (() => {

    
    const contactChildren = () => {
        const contact = document.createElement('div');
        contact.classList.add('contact-background');
        contact.innerHTML = `
        <div class="phone-number">
        <i class="fa-solid fa-phone-rotary"></i>
            <p>+2348180146992</p>
        </div>
        <div class="address">
            <p>509 Gateways Avenue, Port Harcourt, Rivers State, Nigeria</p>
        </div>
        <div id='map' class="map-display"></div>        
        `;

        return contact;
    }

    return { contactChildren }

})();

console.log(contact)

export default contact;