const inputs =document.querySelectorAll('input') ;

function changePicture () {
    console.log(this.name)
    if(this.name === 'base'){

        document.documentElement.style.setProperty(`--${this.name}`,`${this.value}`)
    }
    
    else{
        document.documentElement.style.setProperty(`--${this.name}`,`${this.value}px`)
    }
}


for (var i = 0; i < inputs.length; i ++) {
    inputs[i].addEventListener('change',changePicture)
}
