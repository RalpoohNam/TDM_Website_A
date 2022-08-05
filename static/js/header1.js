const div = document.getElementById('my_div');
const clearbtn = document.getElementById('clearbtn');
const result = document.getElementById('result');


const dropBtn1 = document.getElementById('insight__menu');
const dropBtn2 = document.getElementById('marketinfo__menu');

const dropMenu1 = document.getElementById('insight__subMenu');
const dropMenu2 = document.getElementById('marketinfo__subMenu');

var mousetoggle=0;

div.addEventListener('mouseenter', (event) => {
  result.innerHTML+= '<div>mouseover</div>';
});

div.addEventListener('mouseleave', (event) => {
  result.innerHTML+= '<div>mouseout</div>';
});

clearbtn.addEventListener('click', (event) => {
  result.innerHTML= '';
  count = 0;
});



dropBtn1.addEventListener('mouseover',()=>{
    result.innerHTML+= '<div>insighton</div>';
    dropMenu1.style.display='flex';
});
dropBtn1.addEventListener('mouseout',()=>{
    result.innerHTML+= '<div>insightoff</div>';
    if(mousetoggle%2){}
    else dropMenu1.style.display='none';
});
// dropBtn1.addEventListener('click',()=>{
//     result.innerHTML+= '<div>insightclick</div>';
//     mousetoggle++;
//     if(mousetoggle%2)dropMenu1.style.display='flex';
//     else {dropMenu1.style.display='none';mousetoggle=0;}
// });

dropBtn2.addEventListener('mouseover',()=>{
    result.innerHTML+= '<div>marketon</div>';
    dropMenu2.style.display='flex';
});
dropBtn2.addEventListener('mouseout',()=>{
    result.innerHTML+= '<div>marketoff</div>';
    if(mousetoggle%2){}
    else dropMenu2.style.display='none';
});
// dropBtn2.addEventListener('click',()=>{
//     result.innerHTML+= '<div>marketclick</div>';
//     mousetoggle++;
//     if(mousetoggle%2)dropMenu1.style.display='flex';
//     else {dropMenu2.style.display='none';mousetoggle=0;}
// });
