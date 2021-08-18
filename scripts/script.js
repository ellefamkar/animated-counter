// First method - the best way to write it
const allDivs = document.querySelectorAll(".counter-divs");
const resetValue = document.querySelector(".reset span");
let count = 0;

allDivs.forEach((item)=>{
    item.addEventListener("click",()=>{
        const classes = item.classList;
        if(classes.contains("increment")) {
            count++;
            item.style.initialTranslate = 'translateY(-100%)';
            item.style.addTranslate = 'translateY(100%)';
        }
        else if(classes.contains("decrement")) count--;
        else count=0;
        resetValue.textContent = count;
    });
});


// second and the simplest method for beginners
    /*
    const decrementDiv = document.querySelector(".decrement");
    const resetDiv = document.querySelector(".reset");
    const resetValue = document.querySelector(".reset span");
    const incrementDiv = document.querySelector(".increment");

    decrementDiv.addEventListener("click",(e)=>{
        count--;
        resetValue.textContent = count;
    })
    incrementDiv.addEventListener("click",(e)=>{
        count++;
        resetValue.textContent = count;
    })
    resetDiv.addEventListener("click",(e)=>{
        count = 0;
        resetValue.textContent = count;
    })
    */
