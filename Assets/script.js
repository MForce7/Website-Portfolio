// Function to scroll down by 90vh
document.getElementById('aboutButton').addEventListener('click', function (event) {
    event.preventDefault();  // Prevent default link behavior
    window.scrollBy({
        top: window.innerHeight * 1,  // Scroll down by 90% of the viewport height
        behavior: 'smooth'  // Smooth scrolling
    });
});

document.getElementById('projectButton').addEventListener('click', function (event) {
    event.preventDefault();  // Prevent default link behavior
    window.scrollBy({
        top: window.innerHeight * 1,  // Scroll down by 90% of the viewport height
        behavior: 'smooth'  // Smooth scrolling
    });
});