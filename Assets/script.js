
const home = document.querySelector('#homeButton');
const homeTarget = document.querySelector('.jumbotron');
home.addEventListener('click', function () {
    const offset = 80; // Geser lebih 50px ke atas
    const targetPosition = homeTarget.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});
const about = document.querySelector('#aboutButton')
const aboutTarget = document.querySelector('.aboutMe')
about.addEventListener('click', function (){
    aboutTarget.scrollIntoView({
        behavior: "smooth",
    });
});
const project = document.querySelector('#projectButton')
const projectTarget = document.querySelector('.project')
project.addEventListener('click', function (){
    projectTarget.scrollIntoView({
        behavior: "smooth",
    });
});

const sertif = document.querySelector('#certificateButton');
const sertifTarget = document.querySelector('.sertifikat');
sertif.addEventListener('click', function () {
    const offset = 150; // Geser lebih 50px ke atas
    const targetPosition = sertifTarget.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});




// const sertif = document.querySelector('#certificateButton')
// const sertifTarget = document.querySelector('.sertifikat')
// sertif.addEventListener('click', function (){
//     sertifTarget.scrollIntoView({
//         behavior: "smooth",
//     });
// });


const nav = document.querySelector('nav');


function openLightbox(imgElement) {
    document.getElementById('lightboxImg').src = imgElement.src;
    document.getElementById('lightbox').style.display = "flex";
    nav.classList.add('hidden');
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
    nav.classList.remove('hidden');
}

var displayLogoProject = document.querySelector('#logoProject');
var displayDesainProject = document.querySelector('#grapichDesignProject');
var displayProgrammingProject = document.querySelector('#programmingProject');
var displayCertificate = document.querySelector('#certificate');
// var temp = "Logo"

function openMenuProject(querySelector){
    var turnON = document.querySelector(querySelector);
    displayLogoProject.style.display = "none";
    displayDesainProject.style.display = "none";
    displayProgrammingProject.style.display = "none";
    // displayCertificate.style.display = "none";
    turnON.style.display = "flex";
}


// var temp = document.querySelector('#logoProject');
// // var toggle = document.querySelector('#programmingProject');
// function openMenuProject(idTag) {
//     var element = document.querySelector(idTag);
//     var style = window.getComputedStyle(element);
//     console.log(style.display);
//     if(element != temp){
//         if (style != "flex") {
//             element.style.display = "flex";
//         }
//         temp.style.display = "none";
        
//     }
    // toggle.style.display = "none";
    // var toggle = document.querySelector(turnON);
    // toggle.style.display = "flex";

// }
