const para = document.querySelector('p');
const btns = document.querySelectorAll('.btn');
let val1 = '';
let val2 = '';
let op = '';

function disabledBtn(){
    let match = /[.,0-9]/;
    btns.forEach(function(btn) {
        const dataBtn = btn.dataset.btn;
        // console.log(dataBtn);
        if(dataBtn.match(match)){
            // console.table(dataBtn+' yey!');
            btn.setAttribute('disabled', 'true');
        }
    });
}

function enableBtn(){
    btns.forEach(function(btn){
        btn.removeAttribute('disabled');
    });
}
btns.forEach(btn => btn.addEventListener('click', function(){
    if(para.textContent.length === 7){
        disabledBtn();
    }

    const dataButton = btn.dataset.btn;
    if(dataButton === 'add' || dataButton === 'sub' || dataButton === 'mul' || dataButton === 'div'){
        enableBtn();
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
        val1 = '';
        val2 = '';
        op = 'equal';
    } else if(dataButton === 'clear'){
        val1 = '';
        val2 = '';
        op = '';
        para.textContent = '';
        enableBtn();        
    }
    else{
        if(op !== ''){
            if(val2 !== ''){
                para.textContent += btn.textContent;
                val2 = para.textContent;
            }else if(op === 'equal'){
                para.textContent = '';
                para.textContent += btn.textContent;
                val1 = para.textContent;
                op = '';
            }
            else{
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