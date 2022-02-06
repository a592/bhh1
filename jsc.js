const wrapperDiv = document.getElementById('mosaic_wrapper');
const panel1 = document.querySelector('.panel1');
const panel2 = document.querySelector('.panel2');
const panel3 = document.querySelector('.panel3');
const panel4 = document.querySelector('.panel4');

panel1.addEventListener('mouseover', () => { 
    wrapperDiv.style.backgroundImage = `url('https://image.freepik.com/free-photo/laser-epilation-hair-removal-therapy_1303-23661.jpg?w=740')`;
})

panel2.addEventListener('mouseover', () => { 
    wrapperDiv.style.backgroundImage = `url('https://image.freepik.com/free-photo/upper-view-cosmetologist-hands-holding-dermapen-future-microneedling-procedure-womans-face-which-is-leaning-bed-with-closed-eyes_129180-4321.jpg?w=740')`;
})

panel3.addEventListener('mouseover', () => { 
    wrapperDiv.style.backgroundImage = `url('https://image.freepik.com/free-photo/beautiful-young-woman-getting-botox-cosmetic-injection-her-face_1301-7795.jpg?w=740')`;
})

panel4.addEventListener('mouseover', () => { 
    wrapperDiv.style.backgroundImage = `url('https://image.freepik.com/free-photo/beautician-protective-mask-doing-procedure-hair_7502-7509.jpg?w=740')`;
})

wrapperDiv.addEventListener('mouseleave', () => {
    wrapperDiv.style.backgroundImage = null;
})