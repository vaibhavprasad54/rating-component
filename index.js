// Storing button ID's in variables
const ratingBtn1 = document.getElementById('1');
const ratingBtn2 = document.getElementById('2');
const ratingBtn3 = document.getElementById('3');
const ratingBtn4 = document.getElementById('4');
const ratingBtn5 = document.getElementById('5');
const submitBtn = document.getElementById('submit');
const card1 = document.getElementById('select-rating');
const card2 = document.getElementById('thank-you');

submitBtn.addEventListener('click', onSubmit );

// Function to display and hide card
function onSubmit(){
    console.log("I am Clicked!");
   if(card1.style.display !== "none" ){
       card1.style.display = "none";
       card2.style.display = "block";
       
   }
   else{
       card1.style.display = "block";
   }
   
}

// Changing rating text according to the rating selected
ratingBtn1.addEventListener('click', ratingClicked1);
ratingBtn2.addEventListener('click', ratingClicked2);
ratingBtn3.addEventListener('click', ratingClicked3);
ratingBtn4.addEventListener('click', ratingClicked4);
ratingBtn5.addEventListener('click', ratingClicked5);

function ratingClicked1(){
    console.log('Rating Clicked');
    document.getElementById('ratingNumber').innerText = "1";
    document.getElementById('para').innerText = "Let us know how can we improve ?";
}
function ratingClicked2(){
    console.log('Rating Clicked');
    document.getElementById('ratingNumber').innerText = "2";
}
function ratingClicked3(){
    console.log('Rating Clicked');
    document.getElementById('ratingNumber').innerText = "3";
}
function ratingClicked4(){
    console.log('Rating Clicked');
    document.getElementById('ratingNumber').innerText = "4";
}
function ratingClicked5(){
    console.log('Rating Clicked');
    document.getElementById('ratingNumber').innerText = "5";
}
