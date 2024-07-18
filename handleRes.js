// check the width of the screen and return the appropriate response
// if the screen is less than 600px, return the mobile response
// if the screen is greater than 600px, return the desktop response

const width = window.innerWidth;

if(width < 600) {
// redirect to mobile folder
    window.location.href = '/newListing/mobile';
}
