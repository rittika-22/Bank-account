function deposite(){

    const userInput=document.getElementById('deposite-input');
    const inputValue=userInput.value;
    userInput.value='';

    const currentValue=document.getElementById('current-value');
    const currentAmount=currentValue.innerText;

    const result=parseFloat(inputValue)+parseFloat(currentAmount);
    
    console.log(result);

    currentValue.innerText=result;

    const totalValue=document.getElementById('total-value');
    const totalAmount=totalValue.innerText;
    
    const total=parseFloat(result)+parseFloat(totalAmount);
    totalValue.innerText=total;
   
  }

  function withdraw(){

    const usInput=document.getElementById('withdraw-input');
    const inValue=usInput.value;
    usInput.value='';

    const withdrawValue=document.getElementById('withdraw-value');
    const withdrawAmount=withdrawValue.innerText;

    const result1=parseFloat(inValue)+ parseFloat(withdrawAmount);
    withdrawValue.innerText=result1;

    const totalValue=document.getElementById('total-value');
    const totalAmount=totalValue.innerText;
    
    const total1=parseFloat(totalAmount)-parseFloat(result1);
    totalValue.innerText=total1;
  
  }

  




  