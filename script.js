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