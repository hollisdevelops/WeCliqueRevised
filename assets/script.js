
// Swiper JS...........
let swiper = new Swiper('.mySwiper',{
    slidesPerView: 4,
    spaceBetween: 10, 
});


//.........................Theme Toggle With Local Storage...............................

let darkIcon = document.querySelector('.moon-icon');
let LightIcon = document.querySelector('.sun-icon');
let body = document.querySelector('body')

const idDarkMood = localStorage.getItem('darkMood') === 'true';

//Fuction to set the darkmode mode state and update the UI
function setDarkMood(isDark){
    if(isDark){
    body.classList.add('dark-color');
    LightIcon.style.display='inline-block';
    darkIcon.style.display='none'
    }else{
     body.classList.remove('dark-color');
    LightIcon.style.display='none';
    darkIcon.style.display='inline-block'   
    }
}

// Set the initial dark mode state based on the stored preference 
setDarkMood(idDarkMood);

darkIcon.addEventListener('click',()=>{
    body.classList.add('dark-color');
    LightIcon.style.display='inline-block';
    darkIcon.style.display='none'

    // Add Dark Mood in Local Storage........
    localStorage.setItem('darkMood', 'true');
});

LightIcon.addEventListener('click',()=>{
    body.classList.remove('dark-color');
    LightIcon.style.display='none';
    darkIcon.style.display='inline-block'

    // Remove Dark Mood in Local Storage........
    localStorage.setItem('darkMood', 'false');
});



//.........................Menu Component Toggler...............................

let MenuBarIcon = document.querySelector('.menu-bar');
let LeftBar = document.querySelector('.Left-bar');

MenuBarIcon.addEventListener('click',()=>{
    LeftBar.classList.toggle('Leftbar-active');
    RightBar.classList.remove('rightbar-active');
});

let MessageIcon = document.querySelector('.message-icon');
let RightBar = document.querySelector('.right-bar');

MessageIcon.addEventListener('click', ()=>{
    RightBar.classList.toggle('rightbar-active');
    LeftBar.classList.remove('Leftbar-active');
});