let sections=document.getElementById("sections")
let cloud1=document.querySelector(".cloud1")
let cloud2=document.querySelector(".cloud2")
let cloud3=document.querySelector(".cloud3")

let pola1=document.querySelector(".pola1")
let pola2=document.querySelector(".pola2")
let pola3=document.querySelector(".pola3")
let pola4=document.querySelector(".pola4")
let pola5=document.querySelector(".pola5")
let pola6=document.querySelector(".pola6")
let pola7=document.querySelector(".pola7")
let pola8=document.querySelector(".pola8")
let pola9=document.querySelector(".pola9")
let pola10=document.querySelector(".pola10")
let listItems=document.querySelectorAll('li')
let textWedding=document.querySelector(".text-wedding")

window.addEventListener('scroll', ()=> {
    sections.style.transform = "translate3d(0px, " + (-window.scrollY/1) + "px, 0px)";
    cloud1.style.transform="translate3d(0px," + (-window.scrollY/4.5)+"px, 0px)";
    cloud2.style.transform="translate3d(0px," + (-window.scrollY/2)+"px, 0px)";



    if(scrollY>600){
    cloud3.style.transform="translate3d(0px," + (-window.scrollY/10)+"px, 0px)";
    }

    let position1 = pola1.getBoundingClientRect();
    let position2 = pola2.getBoundingClientRect();
    let position3 = pola3.getBoundingClientRect();
    let position4 = pola4.getBoundingClientRect();
    let position5 = pola5.getBoundingClientRect();
    let position6 = pola6.getBoundingClientRect();
    let position7 = pola7.getBoundingClientRect();
    let position8 = pola8.getBoundingClientRect();
    let position9 = pola9.getBoundingClientRect();
    let position10 = pola10.getBoundingClientRect();

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

    if (position8.top >= 0 && position8.bottom <= window.innerHeight) {
        // move the element up by 100px
        pola8.style.transform = 'translateY(-100px) rotate(-10deg)';
    }

    if (position9.top >= 0 && position9.bottom <= window.innerHeight) {
        // move the element up by 100px
        pola9.style.transform = 'translateY(-100px) rotate(20deg)';
    }

    if (position10.top >= 0 && position10.bottom <= window.innerHeight) {
        // move the element up by 100px
        pola10.style.transform = 'translateY(-100px) rotate(-10deg)';
    }




}
)


// Add 'clicked' class to the first list item
listItems[0].classList.add('clicked');

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function() {
        // Remove 'clicked' class from all list items
        for(let j = 0; j < listItems.length; j++){
            listItems[j].classList.remove('clicked');
        }
        // Add 'clicked' class to the clicked list item
        this.classList.add('clicked');

        // Remove 'show-text' class to start fade-out effect
        textWedding.classList.remove('show-text');

        // Define a new text based on clicked item
        let newText = '';
        if (this.className === "item1 clicked") {
            newText = "Nous vous donnons rendez-vous à 14h pour notre mariage civil à l'hôtel de ville de Blois. S'ensuivra une séance photo avec les familles et les amis. Vous pourrez profiter du cadre de l'hôtel de ville offrant un panorama sur la ville de Blois.";
        } else if (this.className === "item2 clicked") {
            newText = "Pas question de remise en forme ici, mais de la Grange de la Cueillas, à Landes-le-Gaulois, où nous ferons la fête ensemble.";
        } else if (this.className === "item3 clicked") {
            newText = "Nous complèterons la cérémonie civile par une cérémonie laïque, séquence émotion un peu redoutée par les futurs mariés, avec quelques discours et échange des voeux et des alliances.";
        } else if (this.className === "item4 clicked") {
            newText = "Manger, boire, musique, jeux, photos, bref des réjouissances.";
        } else if (this.className === "item5 clicked") {
            newText = "Sous réserve que nous trouvions un traiteur pour qui menu végétarien ne rime pas avec légumes vapeurs, mais c'est en bonne voie.";
        } else if (this.className === "item6 clicked") {
            newText = "La piste de dance a besoin d'un ponçage rigoureux, on compte sur vous.";
        } else if (this.className === "item7 clicked") {
            newText = "Pour les derniers encore debout, la récompense.";
        }else if (this.className === "item8 clicked") {
            newText = "Pour ceux qui souhaitent, un brunch réparateur vous attendra à la Grange de la Cueillas.";
        }

        // Wait for 500ms (0.5 seconds) then update text and add 'show-text' class to start fade-in effect
        setTimeout(function() {
            textWedding.textContent = newText;
            textWedding.classList.add('show-text');
        }, 400);
    });
}



let faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    let answer = question.nextElementSibling;
    let arrow = question.querySelector('.arrow');
    answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
    arrow.classList.toggle('rotate');
  });
});
