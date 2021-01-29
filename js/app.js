// document.getElementById("plusBtnID").addEventListener('click',function(){

//   const  quantityValue=document.getElementById('quantityValueID');
//   const quantityCurrentValue=parseInt(quantityValue.value);
//   const quantityNewValue=quantityCurrentValue +1;
//   quantityValue.value=quantityNewValue;
//   const totalPrice=quantityNewValue * 1219;
//   document.getElementById('price-total').innerText='$' +totalPrice;
  

// });

// document.getElementById('minusBtnID').addEventListener('click',function(){


// const quantityValue=document.getElementById('quantityValueID');
//   const quantityCurrentValue=parseInt(quantityValue.value);
//   quantityNewValue=quantityCurrentValue-1;
//    quantityValue.value=quantityNewValue;
//    const totalPrice=quantityNewValue*1219;
//    document.getElementById('price-total').innerText="$"+totalPrice;
// });







  document.getElementById("plusBtnID").addEventListener('click',function(){
    handleProductChange(true);

});

document.getElementById('minusBtnID').addEventListener('click',function(){

  handleProductChange(false);
});
  // const quantityValue=document.getElementById('quantityValueID');
  // const quantityCurrentValue=parseInt(quantityValue.value);
  // quantityNewValue=quantityCurrentValue-1;
  //  quantityValue.value=quantityNewValue;
  //  const totalPrice=quantityNewValue*1219;
  //  document.getElementById('price-total').innerText="$"+totalPrice;


  document.getElementById("casePlusBtnID").addEventListener('click',function(){
    caseHandleCaseChange(true);

});

document.getElementById('caseMinusBtnID').addEventListener('click',function(){

  caseHandleCaseChange(false);
});




function handleProductChange(isIncrease){

  const quantityValue=document.getElementById('quantityValueID');
  const quantityCurrentValue=parseInt(quantityValue.value);
  // quantityNewValue=quantityCurrentValue-1;

let quantityNewValue=quantityCurrentValue;

  if(isIncrease==true){
    quantityNewValue=quantityCurrentValue+1
  }
  if(isIncrease==false && quantityCurrentValue>0){
    quantityNewValue=quantityCurrentValue-1;
  }

   quantityValue.value=quantityNewValue;
   const totalPrice=quantityNewValue*1219;
   document.getElementById('price-total').innerText="$"+totalPrice;

}


function caseHandleCaseChange(isIncrease){

  const caseQuantityValue=document.getElementById('caseQuantityValueID');
  const caseQuantityCurrentValue=parseInt(caseQuantityValue.value);
  // quantityNewValue=quantityCurrentValue-1;

let caseQuantityNewValue=caseQuantityCurrentValue;

  if(isIncrease==true){
    caseQuantityNewValue=caseQuantityCurrentValue+1
  }
  if(isIncrease==false && caseQuantityCurrentValue>0){
    caseQuantityNewValue=caseQuantityCurrentValue-1;
  }

  caseQuantityValue.value=caseQuantityNewValue;
   const caseTotalPrice=caseQuantityNewValue*59;
   document.getElementById('case-price-total').innerText="$"+caseTotalPrice;

}

    


