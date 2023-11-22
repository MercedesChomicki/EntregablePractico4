/**NAVBAR */

document.addEventListener("scroll", function () {
  let logo = document.getElementById("logo");
  if (window.scrollY > 50) {
    logo.style.width = "10%";  // tamaño cuando se ha hecho scroll
    logo.style.top = "12%";
    logo.style.left = "40%"; 
  } else {
    logo.style.width = "46.09%"; // tamaño original cuando no se ha hecho scroll
    logo.style.top = "75%";
    logo.style.left = "25.78%";
  }

});

/* SECTION 1 */

function section1() {
  let section1 = document.querySelector(".section1");

    let windowHeight = window.innerHeight;   //nos dará la altura de la ventana gráfica.
    let elementTop = section1.getBoundingClientRect().top;  //distancia desde la parte superior de la ventana gráfica
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      section1.classList.add("active");
    } else {
      section1.classList.remove("active");
    }
}

// To check the scroll position on page load
section1();

function section6(){
  let textColumn = document.querySelector(".text-column");
  textColumn.addEventListener("scroll", ()=>{
    console.log(textColumn.scrollTop);
    let text1 = document.querySelector(".text1"),
        text2 = document.querySelector(".text2"),
        text3 = document.querySelector(".text3"),
        text4 = document.querySelector(".text4"),
        img1 = document.getElementById("img1"),
        img2 = document.getElementById("img2"),
        img3 = document.getElementById("img3"),
        img4 = document.getElementById("img4");
  

    if(textColumn.scrollTop > 0 && textColumn.scrollTop < 100){
      text1.style.opacity = 1;
      text2.style.opacity = 0;
      text3.style.opacity = 0;
      text4.style.opacity = 0;
      img1.style.opacity = 1;
      img2.style.opacity = 0;
      img3.style.opacity = 0;
      img4.style.opacity = 0;
    }

    if(textColumn.scrollTop > 100 && textColumn.scrollTop < 560 ){
      text1.style.opacity = 0;
      text2.style.opacity = 1;
      text3.style.opacity = 0;
      text4.style.opacity = 0;
      img1.style.opacity = 0;
      img2.style.opacity = 1;
      img3.style.opacity = 0;
      img4.style.opacity = 0;
    }

    if(textColumn.scrollTop > 560 && textColumn.scrollTop < 950 ){
      text1.style.opacity = 0;
      text2.style.opacity = 0;
      text3.style.opacity = 1;
      text4.style.opacity = 0;
      img1.style.opacity = 0;
      img2.style.opacity = 0;
      img3.style.opacity = 1;
      img4.style.opacity = 0;
    }

    if(textColumn.scrollTop > 950){
      text1.style.opacity = 0;
      text2.style.opacity = 0;
      text3.style.opacity = 0;
      text4.style.opacity = 1;
      img1.style.opacity = 0;
      img2.style.opacity = 0;
      img3.style.opacity = 0;
      img4.style.opacity = 1;
    }
    console.log("scrollTop: "+textColumn.scrollTop);
  })
}

section6();