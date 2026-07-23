/*==========================================
ENECHEF CALI
script.js
==========================================*/

// =========================
// MENÚ AL HACER SCROLL
// =========================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// =========================
// SCROLL SUAVE
// =========================
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// =========================
// ANIMACIÓN DE APARICIÓN
// =========================
const elementos = document.querySelectorAll(".card,.curso,.gallery img");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{threshold:.15});

elementos.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(60px)";
item.style.transition=".8s";

observer.observe(item);

});

// =========================
// CONTADORES
// =========================

const counters = document.querySelectorAll("#estadisticas h2");

counters.forEach(counter=>{

const update=()=>{

const target=counter.innerText.replace(/\D/g,'');

if(target==="") return;

const current=+counter.getAttribute("data-count") || 0;

const increment=Math.ceil(target/70);

if(current<target){

counter.setAttribute("data-count",current+increment);

counter.innerText=(current+increment)+"+";

setTimeout(update,25);

}else{

counter.innerText=target+"+";

}

}

update();

});

// =========================
// LIGHTBOX
// =========================

const gallery=document.querySelectorAll(".gallery img");

const overlay=document.createElement("div");

overlay.id="lightbox";

overlay.innerHTML="<img>";

document.body.appendChild(overlay);

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.95)";
overlay.style.display="none";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="99999";

overlay.querySelector("img").style.maxWidth="90%";
overlay.querySelector("img").style.maxHeight="90%";
overlay.querySelector("img").style.borderRadius="15px";

gallery.forEach(img=>{

img.addEventListener("click",()=>{

overlay.style.display="flex";

overlay.querySelector("img").src=img.src;

});

});

overlay.addEventListener("click",()=>{

overlay.style.display="none";

});

// =========================
// BOTÓN SUBIR
// =========================

const topButton=document.createElement("div");

topButton.innerHTML="↑";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="100px";
topButton.style.right="25px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.borderRadius="50%";
topButton.style.background="#6B3E26";
topButton.style.color="white";
topButton.style.display="flex";
topButton.style.justifyContent="center";
topButton.style.alignItems="center";
topButton.style.cursor="pointer";
topButton.style.opacity="0";
topButton.style.transition=".3s";
topButton.style.zIndex="99999";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.opacity="1";

}else{

topButton.style.opacity="0";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// =========================
// EFECTO HERO
// =========================

const hero=document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;
const y=e.clientY/window.innerHeight;

hero.style.backgroundPosition=`${50+x*3}% ${50+y*3}%`;

});

// =========================
// MENSAJE WHATSAPP
// =========================

document.querySelectorAll('a[href*="wa.me"]').forEach(btn=>{

btn.href="https://wa.me/573155413904?text=Hola%20EneChef,%20quiero%20informaci%C3%B3n%20sobre%20los%20cursos.";

});

// =========================
// PRELOADER
// =========================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

// =========================
// REVELAR TÍTULOS
// =========================

const titles=document.querySelectorAll("section h2");

const observer2=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{opacity:0,transform:"translateY(40px)"},

{opacity:1,transform:"translateY(0)"}

],{

duration:800,

fill:"forwards"

});

}

});

});

titles.forEach(t=>observer2.observe(t));

console.log("EneChef listo.");