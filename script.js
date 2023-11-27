// NAV
let btnMenu = document.getElementById('btn-menu');
btnMenu.addEventListener('click', ()=>{
    document.querySelector(".btn-dropdown").classList.toggle("active");
    document.getElementById('dropdown-content').classList.toggle("show");
})

// Contenido de menu
let cant = 20;
document.querySelectorAll(".dropdown-content li").forEach((li)=>{
  li.style.top = `${cant}px`;
  cant += 40
})

document.addEventListener("scroll", function () {
  console.log(window.scrollY);
  /* NAVBAR */

  let logo = document.getElementById("logo");
  if (window.scrollY > 50) {
    logo.style.width = "10%";  // tamaño cuando se ha hecho scroll
    logo.style.top = "12%";
    logo.style.left = "40%"; 
  } 
  if(window.scrollY < 50) {
    logo.style.width = "46.09%"; // tamaño original cuando no se ha hecho scroll
    logo.style.top = "75%";
    logo.style.left = "25.78%";
  }

  /* SECTION 1 */

  let spiderGirl = document.querySelector(".spider-girl"),
      spiderRed = document.querySelector(".spider-red"),
      spiderBlue = document.querySelector(".spider-blue"),
      spiderWebLeft = document.querySelector(".spider-web-left"),
      spiderWebRight = document.querySelector(".spider-web-right"),
      buildLeft = document.querySelector(".build-left"),
      buildRight = document.querySelector(".build-right"),
      buildCenter = document.querySelector(".build-center");

      if(window.scrollY > 0 && window.scrollY < 700){
        buildLeft.style.top = "2%";
        buildRight.style.top = "-3%";
      }
      if(window.scrollY > 180 && window.scrollY < 700){
        spiderGirl.style.top = "268px";
        spiderGirl.style.left = "6%";
        spiderRed.style.top = "283px";
        spiderWebLeft.style.top = "275px";
        spiderBlue.style.top = "213px";
        spiderBlue.style.left = "56%";
        spiderWebRight.style.top = "265px"; 
        buildCenter.style.top = "70%";   
      } else{
        spiderGirl.style.top = "288px";
        spiderGirl.style.left = "7.03%";
        spiderRed.style.top = "303px";
        spiderWebLeft.style.top = "290px";
        spiderBlue.style.top = "235px";
        spiderBlue.style.left = "54.29%";
        spiderWebRight.style.top = "300px";
        buildLeft.style.top = "5%";
        buildCenter.style.width = "43%";
        buildCenter.style.top = "73.3%";
        buildRight.style.top = "0%";
      }


  /* SECTION 4 */

  let section4Card0 = document.querySelector(".section4-card0"),
      section4Card1 = document.querySelector(".section4-card1"),
      section4Card2 = document.querySelector(".section4-card2");
  
  if(window.scrollY < 1900){
    section4Card0.style.top= "0";
    section4Card1.style.top= "30%";
    section4Card2.style.top = "60%";
  }
  if (window.scrollY > 1900 && window.scrollY < 2600) {
    section4Card0.style.top = "-30%";
  } 
  if (window.scrollY > 2100 && window.scrollY < 2800) {
    section4Card1.style.top = "0";
  }
  if (window.scrollY > 2180 && window.scrollY < 3000) {
    section4Card2.style.top = "30%";
  }
  if(window.scrollY > 2950){
    section4Card0.style.top= "-60%";
    section4Card1.style.top= "-30%";
    section4Card2.style.top = "0";
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


/* SECTION 2 */

function section2(){

  window.addEventListener("scroll", ()=>{
        let smurf = document.querySelector(".smurf");
        
        if(window.scrollY < 150 || window.scrollY > 1700 ){
          smurf.style.top = "15%";
        }
        if((window.scrollY > 150 && window.scrollY < 600)){
          smurf.style.top = "0";
        } 
        if(window.scrollY > 600 && window.scrollY < 1700){
          smurf.style.top = "12.5%";
        } 
      })
}

section2();


/* SECTION 3 */

function section3(){

  window.addEventListener("scroll", ()=>{
        let card = document.querySelectorAll(".section3-card"),
            card1 = document.querySelector(".section3-card1"),
            card2 = document.querySelector(".section3-card2"),
            card3 = document.querySelector(".section3-card3");
        
        if(window.scrollY < 600){
          card.forEach((c)=>{
            c.style.top = "400px";
            c.style.opacity = 0;
          })
        }
        if(window.scrollY > 600){
          card1.style.top = "0px";
          card1.style.opacity = 1;
        }
        if(window.scrollY > 1000){
          card2.style.top = "0px";
          card2.style.opacity = 1;
        }
        if(window.scrollY > 1400){
          card3.style.top = "0px";
          card3.style.opacity = 1;
        }
      })
}

section3()

function section6(){
  let textColumn = document.querySelector(".text-column");
  textColumn.addEventListener("scroll", ()=>{
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

    if(textColumn.scrollTop > 80 && textColumn.scrollTop < 560 ){
      text1.style.opacity = 0;
      text2.style.opacity = 1;
      text3.style.opacity = 0;
      text4.style.opacity = 0;
      img1.style.opacity = 0;
      img2.style.opacity = 1;
      img3.style.opacity = 0;
      img4.style.opacity = 0;
    }

    if(textColumn.scrollTop > 500 && textColumn.scrollTop < 950 ){
      text1.style.opacity = 0;
      text2.style.opacity = 0;
      text3.style.opacity = 1;
      text4.style.opacity = 0;
      img1.style.opacity = 0;
      img2.style.opacity = 0;
      img3.style.opacity = 1;
      img4.style.opacity = 0;
    }

    if(textColumn.scrollTop > 890){
      text1.style.opacity = 0;
      text2.style.opacity = 0;
      text3.style.opacity = 0;
      text4.style.opacity = 1;
      img1.style.opacity = 0;
      img2.style.opacity = 0;
      img3.style.opacity = 0;
      img4.style.opacity = 1;
    }
  })
}

section6();

function section8(){
  let spiderGirl = document.getElementById("spiderGirl"),
      spiderRed =  document.getElementById("spiderRed"),
      spiderBlue =  document.getElementById("spiderBlue"),
      container = document.getElementById("section8-container");

      spiderGirl.addEventListener("mouseover", ()=>{
        spiderGirl.style.width = "30%";
        spiderGirl.style.top = "100px";
        spiderRed.style.width = "25.23%";
        spiderRed.style.left = "42%";
        spiderRed.style.top = "230px";
        spiderBlue.style.width = "19%";
        spiderBlue.style.left = "65%";
        spiderBlue.style.top = "230px";
        spiderRed.style.filter= "blur(4px)";
        spiderBlue.style.filter= "blur(4px)";
        container.style.background = "#f3c5e3";
      })

      spiderGirl.addEventListener("mouseleave", ()=>{
        originalState();
      })

      spiderRed.addEventListener("mouseover", ()=>{
        spiderGirl.style.width = "17.18%";
        spiderGirl.style.top = "300px";
        spiderGirl.style.left = " 14.84%";
        spiderRed.style.width = "45%";
        spiderRed.style.top = "100px";
        spiderRed.style.left = "25%";
        spiderBlue.style.width = "19%";
        spiderBlue.style.left = "70%";
        spiderBlue.style.top = "330px";
        spiderGirl.style.filter= "blur(4px)";
        spiderBlue.style.filter= "blur(4px)";
        container.style.background = "#a9c9ff";
      })

      spiderRed.addEventListener("mouseleave", ()=>{
        originalState();
      })

      
      spiderBlue.addEventListener("mouseover", ()=>{
        spiderGirl.style.width = "17.18%";
        spiderGirl.style.top = "220px";
        spiderGirl.style.left = "22%";
        spiderRed.style.width = "25.23%";
        spiderRed.style.top = "220px";
        spiderRed.style.left = "35%";
        spiderBlue.style.width = "38.82%";
        spiderBlue.style.left = "54%";
        spiderBlue.style.top = "30px";
        spiderGirl.style.filter= "blur(4px)";
        spiderRed.style.filter= "blur(4px)";
        container.style.background = "#cbd0d8";
      })

      spiderBlue.addEventListener("mouseleave", ()=>{
        originalState();
      })

      function originalState(){
        spiderGirl.style.width = "20.93%";
        spiderGirl.style.top = "180px";
        spiderGirl.style.left = " 14.84%";
        spiderRed.style.width = "32.53%";
        spiderRed.style.left = "30.78%";
        spiderRed.style.top = "180px";
        spiderBlue.style.width = "24.49%";
        spiderBlue.style.left = "60.7%";
        spiderBlue.style.top = "180px";
        spiderGirl.style.filter= "blur(0)";
        spiderRed.style.filter= "blur(0)";
        spiderBlue.style.filter= "blur(0)";
        container.style.background = "var(--white)";
      }
}

section8();