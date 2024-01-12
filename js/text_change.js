const changeMenu = document.querySelector('#menu_01_over');

changeMenu.addEventListener('mouseover', ()=>{
    changeMenu.innerText = '자체제작';
    changeMenu.style.color = 'red';
})

changeMenu.addEventListener('mouseout',()=>{
    changeMenu.innerText = 'MADE.J';
    changeMenu.style.color = '#333';
})