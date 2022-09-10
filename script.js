const wrapper = document.querySelector(".wrapper");
const nav = document.querySelector(".nav");
const logo = document.createElement("div");
const link = document.createElement("div");
const karzinka = document.createElement("div");


nav.classList.add("navbar");
logo.classList.add("logo");
link.classList.add("link");
karzinka.classList.add("karzinka");

nav.append(logo);
nav.append(link);
nav.append(karzinka);

logo.innerHTML += `
<img src="./imgs/Drile.png" alt="">

`
link.innerHTML += `

<a href="#">Home </a>                
<a href="#">Shop </a>
<a href="#">Product</a>
<a href="#">Blog</a>
<a href ="#">Page</a>
<a href ="#">Contact</a>

`
karzinka.innerHTML +=`
<button><img src="./imgs/Vector (1).png" alt=""></button>
<button><img src="./imgs/Group.png" alt=""></button>
<button><img src="./imgs/Vector.png" alt=""></button>


`

const section1 = document.querySelector('.section1');
const left = document.createElement('div');
const center = document.createElement('div');
const right = document.createElement('div');
const divimg = document.createElement('div')
const divtext = document.createElement('div')

section1.classList.add('section1');
left.classList.add('left');
center.classList.add('center');
right.classList.add('right');
divimg.classList.add('divimg');
divtext.classList.add('divtext');


section1.append(left);
section1.append(center);
section1.append(right);
center.append(divimg);
center.append(divtext);

left.innerHTML +=`
<img src="./imgs/Vector (2).png" alt="">
`
right.innerHTML +=`
<img src="./imgs/Vector (3).png" alt="">

`
divimg.innerHTML +=`
<img src="./imgs/img1.png" alt="">

`
divtext.innerHTML +=`
<p>Get ready for Our
stylist chair</p>
<button>SHOP NOW</button>

`
