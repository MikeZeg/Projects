// Swap main__home background
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

    
}
setInterval(changeBackgroundImage,5000)



// Change images About
const grabSwap = document.querySelector('#about > div > div.main__about__imgs__swap')
// console.log(grabSwap)

//Our Service change boxes

//Header stay stick in top position or arrow on side

