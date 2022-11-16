
let amount = document.querySelector('#amount');
let guests = document.querySelector('#guests')
let quality = document.querySelector('#quality')
let tipAmount = document.querySelector('#tip-amount');
let countBtn = document.querySelector('#countBtn')

function calculate (){
    let tip = ((amount.value* quality.value) / guests.value).toFixed(2);
    if(tip=== "NaN"){
        tipAmount.textContent = 'Чаевые $ 0 за каждого человека';
        showBlock()
    }
    else {
        tipAmount.textContent = 'Чаевые $ ' + tip + ' за каждого человека';
        showBlock()
    }
}
function showBlock (){
    let block = document.querySelector('#tip-amount');
    block.className= "show";
    setTimeout(function(){
        block.className = block.className.replace('show', '')
    }, 3000)
}
countBtn.addEventListener('click', calculate);