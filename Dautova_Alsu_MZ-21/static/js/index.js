const loginButton = document.getElementById("show-modal-window");
const modalElem = document.querySelector(".modal-window");

modalElem.style.cssText = `
display: flex;
flex-direction: column;
visibility: hidden;
padding: 2% 0;
opacity: 0;
transition: opacity 300ms ease-in-out;
`;

const closeModal = (event) => {
  const target = event.target;

  if (target === modalElem || target.closest(".sing-in__cross")) {
    modalElem.style.opacity = 0;

    setTimeout(() => {
      modalElem.style.visibility = "hidden";
    }, 300);
  }
};

const openModal = () => {
  modalElem.style.visibility = "visible";
  modalElem.style.opacity = 1;
};

loginButton.addEventListener("click", openModal);
modalElem.addEventListener("click", closeModal);

// слайд шоу

let Backgrounds = [
  "../static/images/stray_kids.jpg",
  "../static/images/stray_kids_2.jpg",
];

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

let currentImageIndex = 0;

function changeBackground() {
  const headerBackground = document.querySelector(".Background");
//   const randomIndex = getRandomInt(0, Backgrounds.length - 1);
//   const randomImage = Backgrounds[randomIndex];
  const nextImageIndex = (currentImageIndex + 1) % Backgrounds.length;
  const nextImage = Backgrounds[nextImageIndex];


  currentImageIndex = (currentImageIndex + 1) % Backgrounds.length;


  const tempHeader = document.createElement("Background");
  tempHeader.style.backgroundImage = `url('${nextImage}')`;

  tempHeader.style.opacity = 0;
  document.body.appendChild(tempHeader);

  setTimeout(() => {
    headerBackground.style.opacity = 0;
    tempHeader.style.opacity = 1;

    setTimeout(() => {
      headerBackground.style.backgroundImage = `url('${nextImage}')`;
      headerBackground.style.opacity = 1;
       document.body.removeChild(tempHeader);
    }, 1000); 
  }, 0); 
}

setInterval(changeBackground, 5000);
