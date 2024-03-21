const iEl = document.querySelector(".box_i");
const i1El = document.querySelector(".box_i1");
const i2El = document.querySelector(".box_i2");
const i3El = document.querySelector(".box_i3");
const i4El = document.querySelector(".box_i4");
const btnEl = document.querySelector("#btn");
const conEl = document.querySelector(".container");

btnEl.addEventListener("submit", (e) => {
     e.preventDefault();
     let cardDiv = document.createElement("div");
     let cardTextDiv = document.createElement("div");
     let cardBtnDiv = document.createElement("div");

     let p1 = document.createElement("p");
     let p2 = document.createElement("p");
     let p3 = document.createElement("p");
     let p4 = document.createElement("p");

     let imgEl = document.createElement("img");
     let btn1 = document.createElement("button");
     let btn2 = document.createElement("button");
     let btn3 = document.createElement("button");


     cardDiv.appendChild(imgEl);
     cardDiv.appendChild(cardTextDiv);
     cardDiv.appendChild(cardBtnDiv);

     cardTextDiv.appendChild(p1);
     cardTextDiv.appendChild(p2);
     cardTextDiv.appendChild(p3);
     cardTextDiv.appendChild(p4);

     cardBtnDiv.appendChild(btn1);
     cardBtnDiv.appendChild(btn2);
     cardBtnDiv.appendChild(btn3);

     imgEl.src = i3El.value;
     imgEl.src = i2El.value;
     p1.innerHTML = "Nomi: " + iEl.value;
     p2.innerHTML = "Narxi: " + i1El.value + "$";
     p3.innerHTML = "Oshpaz: " + i3El.value;
     p4.innerHTML = "Restoran: " + i4El.value;

     cardDiv.className = "card";
     imgEl.className = "images";
     cardTextDiv.className = "card_text_group";
     cardBtnDiv.className = "card_btn_group";

     btn1.innerHTML = "Delete";
     btn2.innerHTML = "30/12/2023";
     btn3.innerHTML = "Taom tugadi";
     conEl.prepend(cardDiv);

     iEl.value = "";
     i1El.value = "";
     i2El.value = "";
     i3El.value = "";
     i4El.value = "";

     btn3.addEventListener("click", () => {
          cardDiv.classList.toggle("card_background");
     });

     btn1.addEventListener("click", () => {
          cardDiv.remove();
          btn1.style.backgroundColor = red;

     });
     btnEl.addEventListener("click", () => {
          conEl.style.backgrounColor = white;
          conEl.style.borderRadius = "20px";
          btn1.style.backgroundColor = "red"
     })
});