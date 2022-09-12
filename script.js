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
<button><img src="./imgs/Vector (2).png" alt=""></button>
`
right.innerHTML +=`
<button><img src="./imgs/Vector (3).png" alt=""></button>

`
divimg.innerHTML +=`
<img src="./imgs/img1.png" alt="">

`
divtext.innerHTML +=`
<p>Get ready for Our
stylist chair</p>
<button>SHOP NOW</button>

`


const section2 = document.querySelector('.section2');
const textGlob =document.createElement('textGlob');
const maxsulot = document.createElement('maxsulot');
maxsulot.classList.add('maxsulot');
textGlob.classList.add('textGlob');
section2.append(textGlob);
section2.append(maxsulot);
textGlob.innerHTML +=`
<p>Best Seller Items</p>

`
const data = [
    {
        img:'./imgs/lampa2.png',
        savatcha: './imgs/Vector (5).png',
        like: './imgs/Vector (4).png',
        restar:'./imgs/Group (1).png',
        nomi:'Metal Vintage Pendant',
        narxi:'$79.00'
    },
    {
        img:'./imgs/clok2.png',
        savatcha: './imgs/Vector (5).png',
        like: './imgs/Vector (4).png',
        restar:'./imgs/Group (1).png',
        nomi:'Klosh Table Clock',
        narxi:'$99.00'
    },
    {
        img:'./imgs/lampa.png',
        savatcha: './imgs/Vector (5).png',
        like: './imgs/Vector (4).png',
        restar:'./imgs/Group (1).png',
        nomi:'Arne Dining Chair',
        narxi:'$350.00'
    },
    {
        img:'./imgs/clok.png',
        savatcha: './imgs/Vector (5).png',
        like: './imgs/Vector (4).png',
        restar:'./imgs/Group (1).png',
        nomi:'Klosh Wall Clock',
        narxi:'$80.00 - $129.000'
    },
]


data.map((item)=>{
    maxsulot.innerHTML +=`
    
    
     <div class="box1">
     <div class="btnsdv">
     <img id="imgs" src="${item.img}" alt="">
     <div class = "btnlar">
     <button id="btn11"><img src="${item.restar}" alt=""></button>
     <button id="btn12"><img src="${item.like}" alt=""></button>
     <button id="btn13"><img src="${item.savatcha}" alt=""></button>
     </div>
     </div>
     
     
     <p>${item.nomi}</p>
     <span>${item.narxi}</span>
     </div>
    
     
    
    
    
    
    `
});

