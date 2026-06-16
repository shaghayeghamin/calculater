const themeBtn = document.querySelector("#theme-toggle");
const icon = document.querySelector("#theme-icon");
const modes = document.querySelector('.mode-buttons')
const numbers = document.querySelectorAll('.numbers')
const oparaitors = document.querySelectorAll('.yellowbuttons')
const showOperation = document.querySelector('.amaliat')
const result = document.querySelector('.result')

let show=''

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    
});



    numbers.forEach(number=>
        Operation(number))
    
    
    oparaitors.forEach(number=>
        Operation(number))

       
   





function Operation(number){
    number.addEventListener('click', ()=>{
     if (number.textContent === '='){
     result.textContent = eval(show)
     return
 }
    if (number.textContent === 'X') {
    show += '*';
    } else {
    show += number.textContent;
}
    showOperation.textContent = show;
})
}


