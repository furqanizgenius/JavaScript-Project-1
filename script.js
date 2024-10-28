let minusBtn = document.querySelector('.minus');
let plusBtn = document.querySelector('.plus');
let resetBtn = document.querySelector('.reset');
let incrDecr = document.querySelector('.incr-decr');

let count = document.querySelector('.count');

// subtraction functionality
minusBtn.addEventListener('click', () => {
    let counterValue = parseInt(count.innerText);
    let incdecValue = parseInt(incrDecr.value);
    count.innerText = counterValue - incdecValue;
})

// addition functionality
plusBtn.addEventListener('click', () => {
    let counterValue = parseInt(count.innerText);
    let incdecValue = parseInt(incrDecr.value);
    count.innerText = counterValue + incdecValue;
})

// reset fucntionality
resetBtn.addEventListener('click', () => {
    // let counterValue = parseInt(count.innerText);
    count.innerText = 0;

    // let incdecValue = parseInt(incrDecr.value);
    incrDecr.value = 1;
})





