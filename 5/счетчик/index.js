const btns = document.querySelectorAll('.counter_btn');

btns.forEach(btn => {
    btn.addEventListener('click', function() {
const direction = this.dataset.direction;
const input = this.parentElement.querySelector('.counter_value');
const currentValue = +input.value;
let newValue;

if (direction === 'plus') {
    newValue = currentValue + 1;
} else {
    newValue = currentValue - 1 > 0 ? currentValue -1 : 0; 
}

input.value = newValue;
    })
})
