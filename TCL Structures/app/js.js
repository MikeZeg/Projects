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

let number = 1;

leftArrow.addEventListener('click',()=>{
    console.log('Click left')
})
rightArrow.addEventListener('click',()=>{
    console.log('Click right')
})


// ${number} add to the end of URL
// grabSwap.style.backgroundImage = `url(./Images/about/about${number}.jpg)`
//Our Service change boxes

//Header stay stick in top position or arrow on side

