const colourGen = () => {
    const hex = '0123456789ABCDEF';
    let colour = '#'
    for( let i= 0; i < 6; i++){
        colour+=hex[Math.floor(Math.random() * 16)]
    }
    return colour
}

const colourApplier = (colour) => {
    document.querySelector('body').style.backgroundColor = colour;

}

let repeat;

document.querySelector('#start').addEventListener('click', () => {
   if(!repeat){
    repeat = setInterval(() => {
        colourApplier(colourGen());
    }, 1000);
   }

});

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(repeat);
    repeat=null;
});
