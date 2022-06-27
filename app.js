function updateProductNumber(product, price, isIncreasing) {
  let productInput = document.getElementById( product+"-number");
  let productNumber = productInput.value;
  if (isIncreasing) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;

//--------------- update total case price------------------//
let productTotal = document.getElementById(product +"-total");
productTotal.innerText = productNumber * price;

//------------- calculateTotal-----------------------//
calculateTotal ();
}

function getInputValue (product) {
  const productInput = document.getElementById( product +'-number');
  const productNumber =parseInt( productInput.value);
  return productNumber ;
}

//---------------------- calculate total------------------//
function calculateTotal (){
 const phoneTotal = getInputValue('phone')* 1219 ;
 const caseTotal = getInputValue ('case') * 59 ;
 const subTotal = phoneTotal + caseTotal ;
 const tex = subTotal / 10;
 const totalPrice = tex + subTotal ;

// ----------- update on the html-----------------------//
 document.getElementById('sub-total').innerText = subTotal;
 document.getElementById ('tax-amount').innerText = tex ;
 document.getElementById ('total-price').innerText = totalPrice ;
}



//--------- Phone increased decreased events---------------//
function phonePlus(){
  updateProductNumber('phone',1219, true);
}
function phoneMinus(){
  updateProductNumber('phone',1219, false);
}
//---------- Case plus button clicked function------------//
function casePlus() {
  updateProductNumber('case',59, true);
  // let caseInput = document.getElementById('case-number');
  // const caseNumber = caseInput.value ;
  // caseInput.value = parseInt (caseNumber) + 1 ;
}
//---------- Case minus button clicked function----------//
function caseMinus() {
  updateProductNumber('case',59,false);
  // let caseInput = document.getElementById('case-number');
  // const caseNumber = caseInput.value ;
}



























/* //--------- Phone increased discreased events---------------//
function phonePlus(){
  let phoneInput = document.getElementById('phone-number');
  let phoneNumber = phoneInput.value;
  phoneInput.value = parseInt(phoneNumber)+1;
}
//---------- Case minus button clicked function----------//
function phoneMinus(){
  let phoneInput = document.getElementById ('phone-number');
  let phoneNumber = phoneInput.value ;
  if(phoneNumber>0){
    phoneInput.value = parseInt (phoneNumber)-1 ;
  }
}
 */