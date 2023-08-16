const countValue = document.querySelector('#counter');

// decrement function
function decrement() {
    // get value from UI
   let value =  parseInt(countValue.innerText);
    // updating value   
   value = value - 1;
   countValue.innerText = value;

}

//  increment function
function increment(){
     // get value from UI
    let value =  parseInt(countValue.innerText);
     // updating value 
    value = value + 1;
    countValue.innerText = value;
 
 }