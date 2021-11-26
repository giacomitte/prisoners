//Check If There's Local Storage Color Option
let mainColors = localStorage.getItem('color_option');

if (mainColors !== null) {

    document.documentElement.style.setProperty('--main-color', mainColors);

    //Remove Active Class From All Colors List Items 
    document.querySelectorAll('.colors-list li').forEach(element => {

        element.classList.remove('active');

        //Add Active Class On Element With Data Color === Local Storage Item
        if (element.dataset.color === mainColors) {

            //Add Active Class 
            element.classList.add('active')
        }
    });

}

//Random Background Option 
let backgroundOption = true;

//Variable to Control The Interval 
let backgroundInterval;

//Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem('background-option');

//Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {

    if (backgroundLocalItem === 'true') {

        backgroundOption = true;

    } else {

        backgroundOption = false;

    }

    //Remove Active Class From All Spans
    document.querySelectorAll('.random-backgrounds span').forEach(element => {

        element.classList.remove('active');

    });

    if (backgroundLocalItem === 'true') {

        document.querySelector('.random-background .yes').classList.add('active');

    }

}

//Click On Toggle Settings Cog
document.querySelector('.toggle-settings .fa-spin').onclick = function() {

    //Toggle Class Fa-Spin For Rotation On Self 
    this.classList.toggle('fa-spin');

    //Toggle Class Open On Main Settings Box
    document.querySelector('.settings-box').classList.toggle('open');
}

//Switch Colors 
const colorsLi = document.querySelectorAll('.colors-list li');

//Loop On All List Items
colorsLi.forEach(li => {

    //Click On Every List Items
    li.addEventListener('click', (e) => {

        //Set Color On Root 
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        //Set  Color On Local Storage 
        localStorage.setItem('color_option', e.target.dataset.color);

        // //Remove Active Class From All Childrens
        // e.target.parentElement.querySelectorAll('.active').forEach(element => {

        //     element.classList.remove('active');

        // });

        // //Add Active Class On Self 
        // e.target.classList.add('active');

        handleActive(e);

    });

});

//Switch Random Backgrounds Option
const randomBackEl = document.querySelectorAll('.random-backgrounds span');

//Loop On All Spans
randomBackEl.forEach(span => {

    //Click On Every Spans
    span.addEventListener('click', (e) => {

        // //Remove Active Class From All Childrens
        // e.target.parentElement.querySelectorAll('.active').forEach(element => {

        //     element.classList.remove('active');

        // });

        // //Add Active Class On Self 
        // e.target.classList.add('active');

        handleActive(e);

        if (e.target.dataset.background === 'yes') {

            backgroundOption = true;

            randomizeImgs();

            localStorage.setItem('background_option', true)

        } else {

            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem('background_option', false)

        }

    });

});



// Select Random Page Element 
let landingPage = document.querySelector('.landing');

// Get Array of Images
let imgsArray = ['landing.jpg', '01.jpg', '02.jpg', '03.jpg', '04.jpg', ];




//Function To Randomize Images
function randomizeImgs() {

    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);

            // Change Background Image URL
            landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
        }, 7000);
    }
}
randomizeImgs();


//Create Popup With The Image
let tortureMethods = document.querySelectorAll('.israeli-torture img');

tortureMethods.forEach(img => {

    img.addEventListener('click', (e) => {

        //Create Overlay Element
        let overlay = document.createElement('div');

        //Add Class To Overlay
        overlay.className = 'popup-overlay';

        //Append Overlay To The Body
        document.body.appendChild(overlay);

        //Create The Popup Box 
        let popupBox = document.createElement('div');

        //Add Class To The Popup Box
        popupBox.className = 'popup-box';

        if (img.alt !== null) {

            // create Heading

            let imgHeading = document.createElement('h3');

            //Create Text For Heading
            let imgText = document.createTextNode(img.alt);


            // Append The Text To The Heading
            imgHeading.appendChild(imgText);

            //Append The Heading To The Popup Box
            popupBox.appendChild(imgHeading);


        }
        //Create The Image
        let popupImage = document.createElement('img');

        // Set Image Source 
        popupImage.src = img.src;

        //Add Image to Popup Box
        popupBox.appendChild(popupImage);

        //Append The Popup Box To Body
        document.body.appendChild(popupBox);

        //Create The Close Span
        let closeButton = document.createElement('span');

        // Create The Close Button Text
        let closeButtonText = document.createTextNode('X');

        // Append Text To close Button
        closeButton.appendChild(closeButtonText);

        // Add Class To Close Button
        closeButton.className = 'close-button';

        // Add Close Button To The Popup Box
        popupBox.appendChild(closeButton)

    });
});

//Close Popup 
document.addEventListener('click', function(e) {

    if (e.target.className == 'close-button') {

        //Remove The Current Popup
        e.target.parentNode.remove();

        //Remove Overlay
        document.querySelector('.popup-overlay').remove();
    }
})


//Select All Bullets
const allBullets = document.querySelectorAll('.nav-bullets .bullet');

allBullets.forEach(bullet => {

    bullet.addEventListener('click', (e) => {

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'

        });

    });

});





//Handle Active State 
function handleActive(ev) {
    //Remove Active Class From All Childerns 
    ev.target.parentElement.querySelectorAll('.active').forEach(element => {

        element.classList.remove('active');
    });

    // Add Active Class On Self
    ev.target.classList.add('active');

}

let bulletsSpan = document.querySelectorAll('.bullets-option span');

let bulletsNav = document.querySelector('.nav-bullets');

let bulletLocalItem = localStorage.getItem('bullets_option');

if (bulletLocalItem !== null) {

    bulletsSpan.forEach(span => {

        span.classList.remove('active');

    });

    if (bulletLocalItem === 'block') {

        bulletsNav.style.display = 'block';

        document.querySelector('.bullets-option .yes').classList.add('active');

    } else {

        bulletsNav.style.display = 'none';

        document.querySelector('.bullets-option .no').classList.add('active');
    }
}

bulletsSpan.forEach(span => {

    span.addEventListener('click', (e) => {

        if (span.dataset.display === 'show') {

            bulletsNav.style.display = 'block';

            localStorage.setItem('bullet_option', 'block');

        } else {

            bulletsNav.style.display = 'none';

            localStorage.setItem('bullets_option', 'none');
        }

        handleActive(e);
    });
});


//Reset Button
document.querySelector('.reset-options').onclick = function() {

    localStorage.removeItem('color_option');
    localStorage.removeItem('background_option');
    localStorage.removeItem('bullets_option');

    //Reload Window
    window.location.reload();
}




let nums = document.querySelectorAll('.box .number');
let section = document.querySelector('.figures');
let started = false;



window.onscroll = function() {

    if (window.scrollY >= section.offsetTop) {

        if (!started) {

            nums.forEach((num) => startCount(num));

        }

        started = true;
    }
}

function startCount(el) {

    let goal = el.dataset.goal;

    let count = setInterval(() => {

        el.textContent++;

        if (el.textContent == goal) {
            clearInterval(count);
        }

    }, 2000 / goal);
}


//Toggle Menu 
let toggleBtn = document.querySelector('.toggle-menu');
let tLinks = document.querySelector('.links');

toggleBtn.onclick = function() {

    // Toggle Class 'menu-active' on Button
    this.classList.toggle('menu-active');

    // Toggle Class 'open' on Links
    tLinks.classList.toggle('open');
};

// Click Any Where  Outside Menu And Toggle Button 
document.addEventListener('click', (e) => {

    if (e.target !== toggleBtn && e.target !== tLinks) {

        // Ceck If Menu Is Open 
        if (tLinks.classList.contains('open')) {

            // Toggle Class 'menu-active' on Button
            toggleBtn.classList.toggle('menu-active');

            // Toggle Class 'open' on Links
            tLinks.classList.toggle('open');

        }
    }
});

// Stop Propagation On Menu 
tLinks.onclick = function(e) {
    e.stopPropogation();
}

// Select Menu Bar
const menuBar = document.querySelectorAll('.links-container .link');

menuBar.forEach(link => {


    link.addEventListener('click', (e) => {

        e.preventDefault(); //To Prevent # in a Tag

        document.querySelector(e.target.dataset.menu).scrollIntoView({

            behavior: 'smooth'

        });

    });

});


const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
var slideNumber = 0;


//Image Slider Next Button
nextBtn.addEventListener('click', () => {

    slides.forEach((slide) => {

        slide.classList.remove('active');

    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {

        slideNumber = 0;

    }

    slides[slideNumber].classList.add('active');

});

//Image Slider Previous Button
prevBtn.addEventListener('click', () => {

    slides.forEach((slide) => {

        slide.classList.remove('active');

    });

    slideNumber--;

    if (slideNumber < 0) {

        slideNumber = numberOfSlides - 1;

    }

    slides[slideNumber].classList.add('active');

});

// Image Slider Auto Play 
var playSlider;

var repeater = () => {
    playSlider = setInterval(function() {

        slides.forEach((slide) => {

            slide.classList.remove('active');

        });

        slideNumber++;

        if (slideNumber > (numberOfSlides - 1)) {

            slideNumber = 0;

        }

        slides[slideNumber].classList.add('active');

    }, 4000);

}

repeater();




let icon = document.querySelector('.search-btn');
let search = document.querySelector('.search-text');

icon.onclick = function() {

    search.classList.toggle('active');

}


// Sign in Page

// const sign_in_btn = document.querySelector('#sign-up-btn');
// const sign_up_btn = document.querySelector('#sign-in-btn');
// const signSection = document.querySelector('.signin');

// sign_up_btn.addEventListener('click', () => {

//     signSection.classList.add('sign-up-mode');

// });

// sign_in_btn.addEventListener('click', () => {

//     signSection.classList.remove('sign-up-mode')

// });
