

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
