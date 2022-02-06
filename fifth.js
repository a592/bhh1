const wrapperDiv = document.getElementById('mosaic_wrapper');
const panel1 = document.querySelector('.panel1');
const panel2 = document.querySelector('.panel2');
const panel3 = document.querySelector('.panel3');
const panel4 = document.querySelector('.panel4');

panel1.addEventListener('mouseover', () => { 
    wrapperDiv.style.backgroundImage = `url('https://image.freepik.com/free-photo/beautiful-young-woman-with-white-tulip-her-attractive-perfect-legs-indoors_186202-4427.jpg?w=1060')`;
})

panel2.addEventListener('mouseover', () => { 
    wrapperDiv.style.backgroundImage = `url('https://image.freepik.com/free-photo/woman-receiving-botox-injection-clinic_329181-18788.jpg?w=826')`;
})

panel3.addEventListener('mouseover', () => { 
    wrapperDiv.style.backgroundImage = `url('https://image.freepik.com/free-photo/woman-with-marked-face-receiving-botox-injection_107420-74124.jpg?w=826')`;
})

panel4.addEventListener('mouseover', () => { 
    wrapperDiv.style.backgroundImage = `url('https://image.freepik.com/free-photo/beautician-protective-mask-doing-procedure-hair_7502-7509.jpg?w=826')`;
})

wrapperDiv.addEventListener('mouseleave', () => {
    wrapperDiv.style.backgroundImage = null;
})