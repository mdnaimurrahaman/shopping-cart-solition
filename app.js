function updateCaseNumber(isIncreasing){
    let caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value ;
    if(isIncreasing){
        caseInput.value = parseInt (caseNumber) + 1 ;
    }
    else if(caseNumber>0){
        caseInput.value = parseInt (caseNumber) - 1;
    }
    
}

// Case plus button clicked function
function casePlus(){
    updateCaseNumber(true);
    // let caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value ;
    // caseInput.value = parseInt (caseNumber) + 1 ;
   
}
// Case minus button clicked function
function caseMinus(){
    updateCaseNumber(false);
    // let caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value ;
    
    

}