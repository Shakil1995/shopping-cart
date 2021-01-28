const plusBtn =document.getElementById("plusBtnID");
plusBtn.addEventListener("click",function(){
    console.log("aaa");
    const quantity=document.getElementById("quantityNumberID").value;
    const quantityNumber=parseFloat(quantity);


    console.log("quanityu number: " +quantityNumber);
})