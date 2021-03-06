const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll('nav > a');
navItems[0].textContent = siteContent["nav"]["nav-item-1"]
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems.forEach(x => x.style.color = 'green')

let ctaH = document.querySelector('.cta-text h1');
ctaH.textContent = siteContent['cta']['h1'];

let image1 = document.querySelector('#cta-img')
image1.src = "img/header-img.png"

let button = document.querySelector('.cta-text button');
button.textContent = siteContent['cta']['button'];

let topContentH4 = document.querySelectorAll('.main-content .top-content .text-content h4')
topContentH4[0].textContent = siteContent['main-content']['features-h4'];
topContentH4[1].textContent = siteContent['main-content']['about-h4'];

let topContentP = document.querySelectorAll('.main-content .top-content p');
topContentP[0].textContent = siteContent['main-content']['features-content']
topContentP[1].textContent = siteContent['main-content']['about-content']

let image2 = document.querySelector('#middle-img')
image2.src = "img/mid-page-accent.jpg"

let bottomContentH4 = document.querySelectorAll('.main-content .bottom-content h4')
bottomContentH4[0].textContent = siteContent['main-content']['services-h4']
bottomContentH4[1].textContent = siteContent['main-content']['product-h4']
bottomContentH4[2].textContent = siteContent['main-content']['vision-h4']

let bottomContentP = document.querySelectorAll('.main-content .bottom-content p')
bottomContentP[0].textContent = siteContent['main-content']['services-content']
bottomContentP[1].textContent = siteContent['main-content']['product-content']
bottomContentP[2].textContent = siteContent['main-content']['vision-content']

// let newBit = document.createElement('a')
// let navBar = document.querySelector('.main .nav')
// navBar.prepend(newBit)
// newBit.textContent = "new link"


//create element
const newElement = document.createElement('a')
//Add value to the element
newElement.textContent = "new link"
newElement.href = "www.glossier.com"
//decide where our new element is going
const navBar = document.querySelector('header > nav')
//prepend/appending new element to parent element
navBar.prepend(newElement)

const newElement2 = document.createElement('a')
newElement2.style.backgroundColor = 'green'
newElement2.textContent = "another link"
navBar.appendChild(newElement2)