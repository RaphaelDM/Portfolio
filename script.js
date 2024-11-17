document.addEventListener("DOMContentLoaded", function () {
  // Animation du logo (effet de zoom et fondu)
  gsap.from(".logo img", {
      opacity: 0,
      scale: 0.5,
      duration: 2,
      ease: "power3.out"
  });

  // Animation du titre et du texte (fondu et mouvement)
  gsap.from("h1", {
      opacity: 0,
      y: -50,
      duration: 1.5,
      delay: 1, // Délai avant de commencer l'animation du titre
      ease: "power3.out"
  });

  gsap.from("p", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 1.5, // Délai avant de commencer l'animation du texte
      ease: "power3.out"
  });

  // Après un certain délai, on cache la page d'ouverture et on montre le contenu principal
  setTimeout(function () {
      // Animation de transition vers le contenu principal
      gsap.to("#opening-page", {
          opacity: 0,
          duration: 1,
          onComplete: function () {
              // Une fois l'animation terminée, on cache la page d'ouverture et on montre le contenu
              document.getElementById("opening-page").style.display = "none";
              document.getElementById("main-content").style.display = "block";
          }
      });
  }, 5000); // 5 secondes avant de passer au contenu principal
  
  // Animation pour la présentation
  gsap.from("#presentation h1", { opacity: 0, y: -50, duration: 1 });
  gsap.from("#presentation p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });

  // Animation des cartes de projets (inclut les images)
  gsap.from(".project-img", {
    y: 50,
    duration: 1,
    stagger: 0.3,
    delay: 1
  });
  gsap.to(".project-img", { opacity: 1 });

  // Animation GSAP pour les cartes (projets et formation)
  gsap.from(".card", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.3,
    delay: 0.5
  });

  // Animation des items de formation
  gsap.from(".formation-item", {
    opacity: 0,
    x: -200,
    duration: 1,
    stagger: 0.2,
    delay: 0.5,
  });

  // Fonction pour l'animation au survol des cartes et items
  function addHoverAnimation(elements) {
    elements.forEach(element => {
      element.addEventListener("mouseenter", () => {
        gsap.to(element, { scale: 1.05, duration: 0.3 });
      });
      element.addEventListener("mouseleave", () => {
        gsap.to(element, { scale: 1, duration: 0.3 });
      });
    });
  }

  // Appliquer l'animation de survol pour les cartes et items de formation
  addHoverAnimation(document.querySelectorAll(".card"));
  addHoverAnimation(document.querySelectorAll(".formation-item"));
});

// Initialiser AOS (animations)
AOS.init({
  duration: 1200, // Durée des animations
  easing: 'ease-in-out', // Effet d'accélération
});

document.addEventListener("DOMContentLoaded", function () {
  // Animation du logo (effet de zoom et fondu)
  gsap.from(".logo img", {
      opacity: 0,
      scale: 0.5,
      duration: 2,
      ease: "power3.out"
  });

  // Animation du titre et du texte (fondu et mouvement)
  gsap.from("h1", {
      opacity: 0,
      y: -50,
      duration: 1.5,
      delay: 1, // Délai avant de commencer l'animation du titre
      ease: "power3.out"
  });

  gsap.from("p", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 1.5, // Délai avant de commencer l'animation du texte
      ease: "power3.out"
  });

  // Après un certain délai, on cache la page d'ouverture et on montre le contenu principal
  setTimeout(function () {
      // Animation de transition vers le contenu principal
      gsap.to("#opening-page", {
          opacity: 0,
          duration: 1,
          onComplete: function () {
              // Une fois l'animation terminée, on cache la page d'ouverture et on montre le contenu
              document.getElementById("opening-page").style.display = "none"; // Masquer la page d'ouverture
              document.getElementById("main-content").style.display = "block"; // Afficher le contenu principal
          }
      });
  }, 2000); // 5 secondes avant de passer au contenu principal

  // Autres animations pour le contenu principal ici...
});
