const video = document.querySelectorAll("#video-bg");

function keepPlaying() {
    if (video.paused) {
        video.play().catch(e => console.log("Autoplay Blocked: ",e));
    }
    requestAnimationFrame(keepPlaying);
}

keepPlaying();

document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
        video.play().catch(e => console.log("Tab resumed. but autoplay blocked : ", e));
    }
})


const selectors = ["#singup", "#login", ".registation-div", ".registation", "#head-text", ".singup-from",".login-from", ".logo",".video-bg","back"];
const elements = {}; // Object to store all selected elements

selectors.forEach(selector => {
    // Store elements with the selector as key (without # or .)
    const key = selector.replace(/[#.]/, '');
    elements[key] = document.querySelector(selector);
});

// Now you can access elements like:
elements.singup.addEventListener('click', () => {
    elements['registation-div'].style.height = '550px';
    elements.registation.style.transform = 'scale(0)';
    elements.registation.style.visibility = 'hidden';
    elements['head-text'].style.transform = 'scale(0)';
    // elements['logo'].style.marginTop = '8px';
    elements['singup-from'].style.visibility = 'visible';
    
    setTimeout(() => {
        elements['head-text'].innerHTML = 'Sing Up';
        elements['head-text'].style.transform = 'scale(1)';
        elements['singup-from'].style.transform = 'scale(1)';
    }, 500)
});
elements.login.addEventListener('click', () => {
    elements['registation-div'].style.height = '550px';
    Object.assign(elements.registation.style, {
        transform: 'scale(0)',
        visibility: 'hidden',
    });
    elements['head-text'].style.transform = 'scale(0)';
    // elements['logo'].style.marginTop = '68px';
    elements['login-from'].style.visibility = 'visible';
    
    setTimeout(() => {
        elements['head-text'].innerHTML = 'Log In';
        elements['head-text'].style.transform = 'scale(1)';
        elements['login-from'].style.transform = 'scale(1)';
    }, 500)
});

const selector1 = [elements['head-text'],elements['logo'],elements['back']]

selector1.forEach(e => {    
    e.addEventListener('click', () => {
        // Reset registration div height
        if (window.matchMedia('(max-width: 760px)').matches) {
            elements['registation-div'].style.height = '260px'; // Mobile view
          } else {
            elements['registation-div'].style.height = '200px'; // Desktop view
          }
        
        // Show registration buttons again
        elements.registation.style.transform = 'scale(1)';
        elements.registation.style.visibility = 'visible';
        
        // Hide both forms
        elements['singup-from'].style.transform = 'scale(0)';
        elements['login-from'].style.transform = 'scale(0)';
        elements['singup-from'].style.visibility = 'hidden';
        elements['login-from'].style.visibility = 'hidden';
        
        // Reset heading text
        elements['head-text'].innerHTML = 'Welcome';
        elements['head-text'].style.transform = 'scale(1)';
    });
});