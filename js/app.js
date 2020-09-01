var hover = document.getElementsByClassName('carousel slide')[0]
var left = document.getElementsByClassName('carousel-control-prev')[0]
var right = document.getElementsByClassName('carousel-control-next')[0]

function hover1(){
    left.style.opacity='0'
    right.style.opacity='0'
    if(left.style.opacity==='0'&&right.style.opacity==='0'){
        left.style.opacity='1'
    right.style.opacity='1'
    }
}
function hover2(){
    left.style.opacity='0'
    right.style.opacity='0'
    if(left.style.opacity==='1'&&right.style.opacity==='1'){
        left.style.opacity='0'
    right.style.opacity='0'
    }
}

const darks = document.getElementsByClassName('dark-icon');
for (const dark of darks) {
    dark.addEventListener('click' , darkk) ;
    
}


function darkk(){
    const body = document.body;
    body.classList.toggle('dark-mode') ;
    
    document.querySelector('.navbar-brand').classList.toggle('light');
    
    
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('dark-mode') ;
    const navs = document.querySelector('.nav-div');
    navs.classList.toggle('dark-add') ;
    const navLinks = document.getElementsByClassName('nav-link');
    for (const navLink of navLinks) {
        navLink.classList.toggle('light');
        
    }
    document.querySelector('#header').classList.toggle('header-dark');
    document.querySelector('.design-imgs').classList.toggle('header-dark');
    h1s = document.getElementsByClassName('h12');
    h123s = document.getElementsByClassName('h123');
    for (const h1 of h1s) {
        h1.classList.toggle('light');
        
    }
    for (const h12 of h123s) {
        h12.classList.toggle('light');
        
    }
    document.querySelector('.header-body').classList.toggle('light');
    
    sections = document.getElementsByTagName('section');
    
    for (const section of sections) {
        section.classList.toggle('dark-mode');
        
    }
    divs = document.getElementsByTagName('div');
    
    for (const div of divs) {
        div.classList.toggle('dark-mode');
        if (div.classList.contains('hrdiv')){
            div.classList.remove('dark-mode')}
            if (div.classList.contains('body-sale-20')){
                div.classList.remove('dark-mode')}   
                if (div.classList.contains('body-20')){
                    div.classList.remove('dark-mode')}     
             
    }
    

    
     
}

        
    
    








