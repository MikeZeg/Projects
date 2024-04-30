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





//Header stay stick in top position or arrow on side

