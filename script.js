const tt = document.getElementById('title');
const pp = document.getElementById('para');
const cc = document.getElementById('content');

const dv = document.getElementById('demo-div');


function show(){
     console.log('hello');
     tt.style.transform = 'translateY(-50%)';
     pp.style.transform = 'translateY(-50%)';


}

function show2(){
     dv.style.transform = 'translateY(-30px)';
}

// menu items functions
const breakfastBtn = document.getElementById("breakfast");
const lunchBtn = document.getElementById("lunch");
const dinnerBtn = document.getElementById("dinner");

const breakfastItem = document.getElementById("breakfast-items");
const lunchItem = document.getElementById("lunch-items");
const dinnerItem = document.getElementById("dinner-items");

breakfastBtn.addEventListener('click',ShowBreakfastItems);
function ShowBreakfastItems() {
     lunchBtn.classList.remove('active');
     dinnerBtn.classList.remove('active');
     lunchItem.style.display = "none";
     dinnerItem.style.display = "none";
     
     breakfastBtn.classList.add('active');
     breakfastItem.style.display = "block";
     console.log('showing breakfast')
}

lunchBtn.addEventListener('click',ShowLunchItems);
function ShowLunchItems() {
     breakfastBtn.classList.remove('active');
     dinnerBtn.classList.remove("active");
     breakfastItem.style.display = "none";
     dinnerItem.style.display = "none";
     
     lunchBtn.classList.add('active');
     lunchItem.style.display = "block";
     console.log('showing lunch')
}


dinnerBtn.addEventListener('click',ShowDinnerItems);
function ShowDinnerItems() {
     breakfastBtn.classList.remove('active');
     lunchBtn.classList.remove("active");
     breakfastItem.style.display = "none";
     lunchItem.style.display = "none";
     
     dinnerBtn.classList.add('active');
     dinnerItem.style.display = "block";
     console.log('showing dinner')
}
