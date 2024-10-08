// #1 Main__home Swap background image
// #2 Main__about Swap manual images - main__about__imgs__swap
// #3 Main__client Swap images - Main__client__img
// #4 Header Sticky Bar - stay after pass value
// #5 Home - Press go / move to TOP
// #6 Quote button in Header - move screen  to form
// #7 Close another windows
//     #7.1 Close another windows
// #8 Hidden BTN - close window - optional
// #9 Press btn - move from services to contacts

// #1 -------> Swap main__home background <---------
let flag = false;

const changeBackgroundImage = () => {
    const homeImg = document.querySelector('#homeImg');

    if(!flag){
        homeImg.style.backgroundImage = "url('./Images/background/background2.jpg')"
        homeImg.classList.add('changeImg')
        flag = true;
    }else {
        homeImg.style.backgroundImage = "url('./Images/background/background1.jpg')"
        flag = false;
    }
};
setInterval(changeBackgroundImage,5000);
// -^-----^-----^-----^-----^-----^-----^-----^-----^-----^----

// #2 --------> Change images About <----------
const grabSwap = document.querySelector('.main__about__imgs__swap');
const leftArrow = document.querySelector('.main__about__imgs__left');
const rightArrow = document.querySelector('.main__about__imgs__right');

let imageNumber = 1;

leftArrow.addEventListener('click',()=>{
    // console.log('Click left')
    imageNumber -= 1;
    changeImageAbout();
})
rightArrow.addEventListener('click',()=>{
    // console.log('Click right');
    imageNumber += 1;
    changeImageAbout();
})

// add interval to swap image

const changeImageAbout = () => {
    
    if(imageNumber < 1){
        imageNumber = 5
    }if(imageNumber > 5){
        imageNumber = 1
    }
    grabSwap.style.backgroundImage = `url("./Images/about/about${imageNumber}.jpg")`;
    // console.log(grabSwap.style.backgroundImage)
}
// -^-----^-----^-----^-----^-----^-----^-----^----

// #3 ------> Swap Images Client <-------
const leftImages = document.querySelector('.client__left');
const middleImages = document.querySelector('.client__middle');
const rightImages = document.querySelector('.client__right');
let number = 1;

const changeClientImages = () => {
    
    if(number > 9){
        number = 1;
    }
    let x = number + 1;
    let y = number + 2;
    if(x == 10){
        x=1
    }if(x == 11){
        x=2
    }
    if(y == 10){
        y=1
    }if(y == 11){
        y=2
    }

    leftImages.style.backgroundImage = `url("./Images/client/client${number}.png")`;
    middleImages.style.backgroundImage = `url("./Images/client/client${x}.png")`;
    rightImages.style.backgroundImage = `url("./Images/client/client${y}.png")`;
    
    number += 1;
}
setInterval(changeClientImages,3000)
// -^-----^-----^-----^-----^-----^-----^-----^-----^-----^----

// #4 - Header/Nav stick in top position
const stickyNavBar = document.querySelector('.header');
const sticky = stickyNavBar.offsetTop;

function myFun(){
    let ypos = window.scrollY;
    if(ypos > 120){
        stickyNavBar.classList.add('fade-in');
        stickyNavBar.classList.add('sticky');
    }else{
        stickyNavBar.classList.remove('sticky');
        stickyNavBar.classList.remove('fade-in');
    }
}
window.addEventListener("scroll", myFun);
// -^-----^-----^-----^-----^-----^-----^-----^-----^-----^----

// #5 Home - move to TOP
const homeMove = document.querySelector('#navHome')

homeMove.addEventListener('click', ()=>{
    window.scrollTo(0,0)
});

// -^-----^-----^-----^-----^-----^-----^-----^-----^-----^----

// #6 Quote button in Header - move screen  to form
const quoteBtn  = document.querySelector('.btnQuote')

quoteBtn.addEventListener('click', (e)=>{
    
    e.preventDefault();
// to low in used contact__form ??
    document.querySelector('.main__services__img__items__imprinted').scrollIntoView();

});
// -^-----^-----^-----^-----^-----^-----^-----^-----^-----^-----

// #7 - Open services windows - full open
const pressBox = document.querySelectorAll('.box')
    pressBox.forEach((box)=>{
    closeBoxes(box);
// Open window after press
    box.addEventListener('click',(e)=>{
        const showBox = box.querySelector('.check')
        showBox.classList.toggle('closeFull');
        showBox.classList.toggle('openFull')
    })
});
        //-----^-----^--

// #7.1 Close another windows - ** change to close windows by "X"
function closeBoxes(box) {
    let checkBox = box.querySelector('.check')
    console.log(checkBox);
    // checkBox.classList.toggle('openFull') **   
}
// -^-----^-----^-----^-----^-----^-----^-----^-----^-----^-----

// #8 - Hidden Btn - close window

const closeBtn = () => {
    // console.log('asd')
}
// -^-----^-----^-----^-----^-----^-----^-----^-----^-----^-----

// #9 - Call Us BTN
document.querySelector('#btn__callUs').addEventListener('click',()=>{
    document.querySelector('.main__contact__info__coworkers').scrollIntoView();
})
// -^-----^-----^-----^-----^-----^-----^-----^-----^-----^-----