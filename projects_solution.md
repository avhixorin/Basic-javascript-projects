## Auto_bg_changer
```javascript
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

```


## Bg_colour_changer
```javascript
const buttonList = document.querySelectorAll(".button")

const body = document.querySelector('body')

buttonList.forEach((button) => {
    button.addEventListener('click', (event) => {
        
        body.style.backgroundColor = event.target.id
        // if(event.target.id === "red"){
        //     body.style.backgroundColor = event.target.id
        // }else if(event.target.id === "blue"){
        //     body.style.backgroundColor = event.target.id
        // }else if(event.target.id === "red"){
        //     body.style.backgroundColor = event.target.id
        // }else if(event.target.id === "red"){
        //     body.style.backgroundColor = event.target.id
        // }
    })
})
```

## BMI_calculator
```javascript


let result = 0;

document.querySelector('#submit').addEventListener('click',(event) => {
    const heightValue = document.querySelector('#height').value
    const weightValue = document.querySelector('#weight').value
    if (heightValue === '' || heightValue < 0 || isNaN(heightValue)) {
        document.querySelector('#result').innerHTML = `Please enter valid weight ${heightValue}`
      } else if (weightValue === '' || weightValue < 0 || isNaN(weightValue)) {
        document.querySelector('#result').innerHTML = `Please enter valid weight ${weightValue}`
      } else {
        result = (weightValue / ((heightValue * heightValue) / 10000)).toFixed(2);
        //show the result
        if(result < 18.6){
            document.querySelector('#result').innerHTML = `Your BMI is ${result} and you are Under weight`
        }else if(result >= 18.6 && result <= 24.9){
            document.querySelector('#result').innerHTML = `Your BMI is ${result} and you have Normal weight`
        }else{
            document.querySelector('#result').innerHTML = `Your BMI is ${result} and you are Over weight`
        }
        
      }
})

document.querySelector('#reset').addEventListener('click',(event) => {
    height.value = ""
    weight.value = ""
    document.querySelector('#result').innerHTML = ''
})

```


## Digital_clock
```javascript
const clock = document.querySelector('.time')

setInterval(() => {
    let date = new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```


