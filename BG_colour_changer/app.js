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