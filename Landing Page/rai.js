const menutoggle=document.querySelectorAll('.toggle');
const navigation=document.querySelector('.navigation');

menutoggle.onclick=function(){
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

const slides=document.querySelectorAll('.sides');
const prev = document.querySelector(".prev");
const next=document.querySelector('.next');
let i=0;

function activeSlide(n){
    for(const slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

next.addEventListener('click',function(){
    if(i==slides.length - 1){
        i=0;
    }else{
        i++;
    }
    activeSlide(i);
    
});

prev.addEventListener('click',function(){
    if(i==0){
        i=slides.length - 1;
    } else{
        i--;
    }
    activeSlide(i);
    });
