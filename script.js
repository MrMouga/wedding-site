const mobileMenuButton = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");

mobileMenuButton.addEventListener("click", () => {
  navList.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
  });
});



let sections=document.getElementById("sections")
let cloud1=document.querySelector(".cloud1")
let cloud2=document.querySelector(".cloud2")
let cloud3=document.querySelector(".cloud3")
let title1=document.querySelector(".title1")
let title2=document.querySelector(".title2")
let title3=document.querySelector(".title3")



let pola1=document.querySelector(".pola1")
let pola2=document.querySelector(".pola2")
let pola3=document.querySelector(".pola3")
let pola4=document.querySelector(".pola4")
let pola5=document.querySelector(".pola5")
let pola6=document.querySelector(".pola6")
let pola7=document.querySelector(".pola7")


let listItems=document.querySelectorAll('li')
let textWedding=document.querySelector(".text-wedding")
let faqQuestions = document.querySelectorAll('.faq-question');


const day1Content = `
<ul>
<li class="item1"><button class="clicked"><strong>14h30</strong> | <i>Accueil du public</i></button></li>
<li class="item2"><button><strong>15h00 <u>pétante</u></strong>  | <i>Cérémonie laïque</i></button></li>
<li class="item3"><button><strong>17h00</strong> | <i>Quartier libre...</i></button></li>
<li class="item4"><button><strong>18h00</strong> | <i>Apéro</i></button></li>
<li class="item5"><button><strong>20h00</strong>  | <i>Dîner assis</i></button></li>
<li class="item6"><button><strong>Ce pourquoi on est là 💃🕺</strong></button></li>
</ul>
`;

const day2Content = `
<ul>
  <li class="item7"><button class="clicked"><strong>Aux aurores</strong> | <i>Soupe à l’oignon</i></button></li>
  <li class="item8"><button><strong>Au réveil</strong> | <i>Brunch</i></button></li>
</ul>
`;

const item1Content=`
<p class="text-wedding">Bison futé annonce un trafic limité en Beauce, nous vous attendons donc à l’heure au domaine de la Brosse Montmort. <br>Un nom qui tue pour fêter la vie.</p>
`;

const item2Content=`
<p class="text-wedding">La meilleure oratrice et le plus grand rhéteur du Loir-et-Cher consacreront notre mariage suite à une série de discours qui auront déclenché une véritable panoplie d’émotions dans l’assemblée. <br> Petits mouchoirs recommandés.</p>
`;

const item3Content=`
<p class="text-wedding">...ou presque, nous immortaliserons l’instant par quelques photos et profiterons du domaine pour jouer, chanter, danser, vivre.</p>
`;

const item4Content=`
<p class="text-wedding">L’heure préférée des Français·e·s, <br> un instant de convivialité partagé au gré de quelques coupes de joie, pintes de rire et bouchées de bonheur.</p>
`;

const item5Content=`
<p class="text-wedding">Passée l’appréhension de découvrir le plan de table, installez-vous confortablement et laissez le traiteur vous guider culinairement.</p>
`;

const item6Content=`
<p class="text-wedding">Vous tressaillez depuis plusieurs heures, 
voici maintenant venue l’occasion de 
libérer cette énergie sur la piste de danse.</p>
`;

const item7Content=`
<p class="text-wedding">Ne cherchez pas les mariés très loin, ils devraient être du côté de la piste de danse ou du bar.</p>
`;

const item8Content=`
<p class="text-wedding">Venez vous ressourcer et raconter vos exploits de la veille autour d’un déjeuner partagé.</p>
`;



const programList = document.querySelector('.program-list');
const programContent = document.querySelector('.program-content');


//Parallax on scroll

window.addEventListener('scroll', ()=> {
    sections.style.transform = "translate3d(0px, " + (-window.scrollY/1) + "px, 0px)";
      cloud1.style.transform="translate3d(0px," + (-window.scrollY/4.5)+"px, 0px)";
      cloud2.style.transform="translate3d(0px," + (-window.scrollY/2)+"px, 0px)";
      title1.style.transform="translate3d(0px," + (-window.scrollY/2)+"px, 0px)";
      title2.style.transform="translate3d(0px," + (-window.scrollY/3)+"px, 0px)";
      title3.style.transform="translate3d(0px," + (-window.scrollY/4)+"px, 0px)";
  
  
  
      if(scrollY>400){
      cloud3.style.transform="translate3d(0px," + (-window.scrollY/3)+"px, 0px)";

      }
  


      let position1 = pola1.getBoundingClientRect();
      let position2 = pola2.getBoundingClientRect();
      let position3 = pola3.getBoundingClientRect();
      let position4 = pola4.getBoundingClientRect();
      let position5 = pola5.getBoundingClientRect();
      let position6 = pola6.getBoundingClientRect();
      let position7 = pola7.getBoundingClientRect();


  
  
      
  
      // checking whether the element is in the viewport
      if (position1.top >= 0 && position1.bottom <= window.innerHeight) {
          // move the element up by 100px
          pola1.style.transform = 'translateY(-100px) rotate(10deg)';
      }
  
      if (position2.top >= 0 && position2.bottom <= window.innerHeight) {
          // move the element up by 100px
          pola2.style.transform = 'translateY(-100px) rotate(-10deg)';
      }
  
      if (position3.top >= 0 && position3.bottom <= window.innerHeight) {
          // move the element up by 100px
          pola3.style.transform = 'translateY(-100px) rotate(15deg)';
      }
  
      if (position4.top >= 0 && position4.bottom <= window.innerHeight) {
          // move the element up by 100px
          pola4.style.transform = 'translateY(-100px) rotate(-20deg)';
      }
  
      if (position5.top >= 0 && position5.bottom <= window.innerHeight) {
          // move the element up by 100px
          pola5.style.transform = 'translateY(-100px) rotate(25deg)';
      }
  
      if (position6.top >= 0 && position6.bottom <= window.innerHeight) {
          // move the element up by 100px
          pola6.style.transform = 'translateY(-100px) rotate(-14deg)';
      }
  
      if (position7.top >= 0 && position7.bottom <= window.innerHeight) {
          // move the element up by 100px
          pola7.style.transform = 'translateY(-100px) rotate(5deg)';
      }
  
  



}
)


//Change background color on scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    let startScroll1, maxScroll1, maxScroll2, maxScroll3, maxScroll4;

    if (window.innerWidth < 768) {
        startScroll1 = 2500;
        maxScroll1 = 3500;
        maxScroll2 = 3800;
        maxScroll3 = 6000;
        maxScroll4 = 7500;
    } else {
        startScroll1 = 3000;
        maxScroll1 = 5000;
        maxScroll2 = 6000;
        maxScroll3 = 8000;
        maxScroll4 = 10000;
    }

    // Initial and target colors
    const initial = {r: 255, g: 216, b: 11};
    const target1 = {r: 220, g: 107, b: 0};
    const target2 = {r: 48, g: 114, b: 120};
    const target3 = {r: 8, g: 7, b: 45};
    const target4 = {r: 16, g: 88, b: 104};

    let rValue, gValue, bValue;

    if (scrollPosition <= startScroll1) {
        rValue = initial.r;
        gValue = initial.g;
        bValue = initial.b;
    } else if (scrollPosition > startScroll1 && scrollPosition <= maxScroll1) {
        const percentageScrolled = (scrollPosition - startScroll1) / (maxScroll1 - startScroll1);
        rValue = Math.floor(initial.r + (target1.r - initial.r) * percentageScrolled);
        gValue = Math.floor(initial.g + (target1.g - initial.g) * percentageScrolled);
        bValue = Math.floor(initial.b + (target1.b - initial.b) * percentageScrolled);
    } else if (scrollPosition > maxScroll1 && scrollPosition <= maxScroll2) {
        const percentageScrolled = (scrollPosition - maxScroll1) / (maxScroll2 - maxScroll1);
        rValue = Math.floor(target1.r + (target2.r - target1.r) * percentageScrolled);
        gValue = Math.floor(target1.g + (target2.g - target1.g) * percentageScrolled);
        bValue = Math.floor(target1.b + (target2.b - target1.b) * percentageScrolled);
    } else if (scrollPosition > maxScroll2 && scrollPosition <= maxScroll3) {
        const percentageScrolled = (scrollPosition - maxScroll2) / (maxScroll3 - maxScroll2);
        rValue = Math.floor(target2.r + (target3.r - target2.r) * percentageScrolled);
        gValue = Math.floor(target2.g + (target3.g - target2.g) * percentageScrolled);
        bValue = Math.floor(target2.b + (target3.b - target2.b) * percentageScrolled);
    } else if (scrollPosition > maxScroll3 && scrollPosition <= maxScroll4) {
        const percentageScrolled = (scrollPosition - maxScroll3) / (maxScroll4 - maxScroll3);
        rValue = Math.floor(target3.r + (target4.r - target3.r) * percentageScrolled);
        gValue = Math.floor(target3.g + (target4.g - target3.g) * percentageScrolled);
        bValue = Math.floor(target3.b + (target4.b - target3.b) * percentageScrolled);
    } else {
        // After all transitions are complete
        rValue = target4.r;
        gValue = target4.g;
        bValue = target4.b;
    }

    // Apply the calculated background color
    document.body.style.backgroundColor = `rgb(${rValue},${gValue},${bValue})`;
});





// Function to remove "clicked" class from a list of buttons
const removeClicked = (buttons) => {
buttons.forEach(btn => {
  btn.classList.remove('clicked');
});
};

// Function to add click event to program list buttons
const addProgramListEvent = () => {
const programButtons = document.querySelectorAll('.program-list button');
programButtons.forEach(button => {
  button.addEventListener('click', function() {
    removeClicked(programButtons);
    this.classList.add('clicked');

    if (this.parentElement.classList.contains('item1')) {
        programContent.innerHTML = item1Content;
      } else if (this.parentElement.classList.contains('item2')) {
        programContent.innerHTML = item2Content;
      } else if (this.parentElement.classList.contains('item3')) {
        programContent.innerHTML = item3Content;
      } else if (this.parentElement.classList.contains('item4')) {
        programContent.innerHTML = item4Content;
      } else if (this.parentElement.classList.contains('item5')) {
        programContent.innerHTML = item5Content;
      }else if (this.parentElement.classList.contains('item6')) {
        programContent.innerHTML = item6Content;
      }else if (this.parentElement.classList.contains('item7')) {
        programContent.innerHTML = item7Content;
      }else if (this.parentElement.classList.contains('item8')) {
        programContent.innerHTML = item8Content;
      }



    
  });
});
};

// Select all buttons within element with class "days"
const dayButtons = document.querySelectorAll('.days button');
dayButtons.forEach(button => {
button.addEventListener('click', function() {
  removeClicked(dayButtons);
  this.classList.add('clicked');
  
  if (this.parentElement.classList.contains('day-1')) {
    programList.innerHTML = day1Content;
    programContent.innerHTML = item1Content;
  } else if (this.parentElement.classList.contains('day-2')) {
    programList.innerHTML = day2Content;
    programContent.innerHTML = item7Content;
    
  }

  // Add click event to new program list buttons
  addProgramListEvent();
});
});

// Initialize
addProgramListEvent();

//FAQ
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    let answer = question.nextElementSibling;
    let arrow = question.querySelector('.arrow');
    answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
    arrow.classList.toggle('rotate');
  });
});
