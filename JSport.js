
const typewriterElement = document.getElementById("typewriter");
const textContent = "Construindo Experiências Digitais Funcionais e Responsivas";
let charIndex = 0;
let isDeleting = false;

function handleTypewriter() {
    const typingSpeed = isDeleting ? 50 : 100;
    typewriterElement.innerHTML = textContent.substring(0, charIndex);

    if (!isDeleting && charIndex < textContent.length) {
        charIndex++;
        setTimeout(handleTypewriter, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(handleTypewriter, typingSpeed);
    } else {
        
        isDeleting = !isDeleting;
        setTimeout(handleTypewriter, isDeleting ? 2000 : 500);
    }
}


function validateForm(event) {
    const emailValue = document.querySelector('input[name="email"]').value;
    const messageValue = document.querySelector('textarea[name="message"]').value;

    if (!emailValue.includes("@") || messageValue.length < 5) {
        alert("Please enter a valid email and a message with at least 5 characters.");
        event.preventDefault(); 
        return false;
    }
    return true;
}


window.onload = () => {
    handleTypewriter();
    
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.onsubmit = validateForm;
    }
};



// --- PROGRESS BAR ANIMATION ---
function animateProgressBars() {
    const bars = document.querySelectorAll('.progress');
    
    bars.forEach(bar => {
        // Get the percentage from the data attribute
        const targetWidth = bar.getAttribute('data-width');
        
        // Force a tiny delay so the browser sees the width change from 0 to target
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 150);
    });
}

// --- INITIALIZE ALL SCRIPTS ---
document.addEventListener('DOMContentLoaded', () => {
    // Start the typewriter loop
    if (typeof handleTypewriter === "function") {
        handleTypewriter();
    }

    // Start the progress bars
    animateProgressBars();
});