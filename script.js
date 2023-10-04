const tt = document.getElementById('title');
const pp = document.getElementById('para');
const cc = document.getElementById('content');

const dv = document.getElementById('demo-div');

console.log('hi');

cc.addEventListener('scroll', show());

dv.onscroll = show2();

function show(){
     console.log('hello');
     tt.style.transform = 'translateY(-50%)';
     pp.style.transform = 'translateY(-50%)';


}

function show2(){
     dv.style.transform = 'translateY(-30px)';
}
