const sejarah = document.querySelector('#nav1')
const sejarahTarget = document.querySelector('.geserManual')
sejarah.addEventListener('click', function (){
    sejarahTarget.scrollIntoView({
        behavior: "smooth",
    });
});