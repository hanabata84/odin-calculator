const para = document.querySelector('p');
const btns = document.querySelectorAll('.btn');
let val1 = '';
let val2 = '';
let op = '';

btns.forEach(btn => btn.addEventListener('click', function(){
    const dataButton = btn.dataset.btn;
    if(dataButton === 'add' || dataButton === 'sub' || dataButton === 'mul' || dataButton === 'div'){
        if(op !== ''){
            para.textContent = operate(op,Number(val1),Number(val2));
            val1 = para.textContent;
            op = dataButton;
            val2 = '';
        }else {
            op = dataButton;
        }
        
    } else if(dataButton === 'equal'){
        para.textContent = operate(op,Number(val1),Number(val2));
    } else if(dataButton === 'clear'){
        val1 = '';
        val2 = '';
        op = '';
        para.textContent = '';
    }
    else{
        if(op !== ''){
            if(val2 !== ''){
                para.textContent += btn.textContent;
                val2 = para.textContent;
            }else{
                para.textContent = '';
                para.textContent += btn.textContent;
                val2 = para.textContent;
            }
            
        } else {
            para.textContent += btn.textContent;
            val1 = para.textContent;
        }        
    }    
}));

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, a, b){
    if(operator === 'add'){
        return add(a, b);
    }else if(operator === 'sub'){
        return subtract(a, b);
    }else if(operator === 'mul'){
        return multiply(a, b);
    }else if(operator === 'div'){
        return divide(a, b);
    }
}