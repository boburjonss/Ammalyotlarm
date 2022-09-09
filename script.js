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
<p>Drile</p>

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