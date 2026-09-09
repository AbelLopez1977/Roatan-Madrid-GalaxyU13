
// ⬇️ HISTORIAS DE LOS JUGADORES: Llena este objeto con los datos reales.
// El 'id' debe coincidir exactamente con el 'data-id' que pusiste en el HTML.
const playerStories = {
    "1": {
        name: "Miguel Barralaga",
        story: "My name is Miguel, my dream, with God's help, is to be a professional soccer player, also, I would like to be a mechanic when I grow up."
    },
    "2": {
        name: "Oscar Vasquez",
        story: "Hello, my name is Oscar, my father is airpot firefighter and my mother takes care of me and my siblings, my public school is good and my dream is to play for a big team in the future and represent the Honduras national team."
    },
     "3": {
        name: "Kaiden Ebanks",
        story: "Hello my name is Kaiden, my goal is to become a pro soccer player and to be able to compete in one of the big leagues in Europe, it is also my dream to be a big ship captain!I admire Cristiano and Van Dijk for their discipline and leadership."
    },
     "4": {
        name: "Jason Castellanos",
        story: "Hello! my name is Jason, my dream is to be a Civil Engineer and contribute to the development of my country.  Soccer: my wish is to be able to play in our professional league and from there represent my country playing for the national team."
    },
     "5": {
        name: "Coe Woods Brady",
        story: "My name is Coe Woods, I started to play soccer at 3 and a half y/o.  my dream is to become a pro soccer player, and represent my national soccer team in the biggest tournaments and play for some of the greatest clubs in the world."
    },
     "6": {
        name: "Leon Leal Lazaro",
        story: "For Leon, soccer is synonymous with joy, friendship and self-improvment.  He loves scoring goals and spending time with his teammates, but also has his sights set on a bright future, he dreams of becoming the best player in the world and wearing RM jersey."
    },
     "7": {
        name: "Patrick Banegas",
        story: "My name is Patrick Banegas, I'm 11 y/o.  I'm midfielder in Galaxy U13.  My dream is to become a Professional soccer player and play in Premier League"
    },
     "8": {
        name: "Reacherd Hernandez",
        story: "My name is Reacheard, my biggest dream is to be a professional soccer player and play in Europe.  I also want to start my own arquitecture firm.  I consider myself a responsible, persevering and committed person. I am confident on that, with effort and discipline, I will achieve my goals."
    },
     "9": {
        name: "Dereck Welcome",
        story: "Hello, my name is Dereck, I attend school and work in a watertaxi, my dream is to play professional soccer and buy a house for my mother."
    },
     "10": {
        name: "Ian Connor",
        story: "My name is Ian, my dream is to play soccer and travel the world through the sport."
    },
     "11": {
        name: "Jhosias Martinez",
        story: "Hi, my name is Jhosias, I consider myself a disciplined, responsible and dedicated person, my isnpiration is Neymar Jr. my dream is to be a professional soccer player for my team, my family and my country, i'm working on it."
    },
      
    
};

// Selección de elementos del DOM
const modal = document.getElementById("story-modal");
const modalName = document.getElementById("modal-name");
const modalStory = document.getElementById("modal-story");
const closeBtn = document.querySelector(".close-btn");
const playerCards = document.querySelectorAll(".player-card");

// Evento al hacer clic en cualquier tarjeta de jugador
playerCards.forEach(card => {
    card.addEventListener("click", () => {
        const playerId = card.getAttribute("data-id");
        const playerData = playerStories[playerId];

        if (playerData) {
            modalName.innerText = playerData.name;
            modalStory.innerText = playerData.story;
            modal.style.display = "flex"; // Muestra el modal de forma centrada
        }
     });
});

if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // 👈 CRÍTICO: Detiene el clic aquí para que no afecte al fondo
        modal.style.display = "none"; // Cierra el modal
    });
}

// 3. CERRAR AL HACER CLIC EN EL FONDO OSCURO
window.addEventListener("click", (e) => {
    // Si el usuario hace clic exactamente en el fondo (fuera de la caja blanca)
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// 4. CERRAR AL PRESIONAR LA TECLA ESCAPE
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const masonry = document.querySelector(".photo-masonry");
    const lightbox = document.getElementById("custom-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");

    // 1. Escuchar clics en las fotos (Usa delegación de eventos)
    masonry.addEventListener("click", (e) => {
        const clickedImg = e.target.closest(".photo-item img");
        if (!clickedImg) return;

        // Clonar la ruta de la imagen y abrir Lightbox
        lightboxImg.src = clickedImg.src;
        lightboxImg.alt = clickedImg.alt;
        
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden"; // Bloquea el scroll del fondo
    });

     // 2. Función para cerrar el Lightbox
    const closeLightbox = () => {
        lightbox.classList.remove("active");
        document.body.style.overflow = ""; // Devuelve el scroll al fondo
        setTimeout(() => { lightboxImg.src = ""; }, 300); // Limpia la imagen al terminar la animación
    };

    // 3. Eventos para cerrar (Clic en X, clic fuera de la foto o tecla Escape)
    closeBtn.addEventListener("click", closeLightbox);
    
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }
    });
});