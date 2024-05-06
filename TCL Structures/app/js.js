// 1 Services change boxes ?
// 2 

// -------> Swap main__home background <---------
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

// --------> Change images About <----------
const grabSwap = document.querySelector('.main__about__imgs__swap');
const leftArrow = document.querySelector('.main__about__imgs__left');
const rightArrow = document.querySelector('.main__about__imgs__right');

let imageNumber = 1;

leftArrow.addEventListener('click',()=>{
    console.log('Click left')
    imageNumber -= 1;
    changeImageAbout();
})
rightArrow.addEventListener('click',()=>{
    console.log('Click right');
    imageNumber += 1;
    changeImageAbout();
})

const changeImageAbout = () => {
    
    if(imageNumber < 1){
        imageNumber = 5
    }if(imageNumber > 5){
        imageNumber = 1
    }
    grabSwap.style.backgroundImage = `url("./Images/about/about${imageNumber}.jpg")`;
    console.log(grabSwap.style.backgroundImage)
}
// ------> Swap Images Client <-------
const leftImages = document.querySelector('.client__left');
const middleImages = document.querySelector('.client__middle');
const rightImages = document.querySelector('.client__right');

//  1-9
//  x=1 y=2 z=3
//  x=2 y=3 z=4
//  x=3 y=4 z=5
//  x=4 y=5 z=6
//  x=5 y=6 z=7
//  x=6 y=7 z=8
//  x=7 y=8 z=9
//  x=8 y=9 z=1
//  x=9 y=1 z=2

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
    
    console.log('Number: ' + number)
    number += 1;
    console.log(middleImages.style.backgroundImage)
}
setInterval(changeClientImages,3000)

//Header stay stick in top position or arrow on side

