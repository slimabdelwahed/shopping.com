const products = [
    {
      name: "Smartphone XYZ",
      image: "api\data\images\phone.jpg",
      description: "Un smartphone de dernière génération avec un écran AMOLED et une autonomie de 48 heures.",
      rating: 4.5,
      price: 699,
      countInStock: 15,
      numReview: 10,
      reviews: [
        {
          name: "Jean Dupont",
          rating: 5,
          comment: "Excellent téléphone avec une superbe qualité d'écran !",
          user: "643f1b5d7e7b6c2f77a4d234"
        }
      ]
    },
    {
      name: "Ordinateur portable ABC",
      image: "api\data\images\abc.jpg",
      description: "Ordinateur portable avec processeur Intel i7, 16 Go de RAM et SSD 512 Go.",
      rating: 4.2,
      price: 1200,
      countInStock: 8,
      numReview: 8,
      reviews: [
        {
          name: "Alice Martin",
          rating: 4,
          comment: "Très rapide, mais l'autonomie de la batterie pourrait être meilleure.",
          user: "643f1b5d7e7b6c2f77a4d235"
        }
      ]
    },
    {
      name: "Écouteurs sans fil PRO",
      image: "api\data\images\beats-fit-pro.jpg",
      description: "Écouteurs avec réduction active du bruit et autonomie de 10 heures.",
      rating: 4.7,
      price: 149,
      countInStock: 30,
      numReview: 25,
      reviews: [
        {
          name: "Marc Dupuis",
          rating: 5,
          comment: "Le son est incroyable et l'annulation de bruit fonctionne très bien !",
          user: "643f1b5d7e7b6c2f77a4d236"
        }
      ]
    },
    {
      name: "Montre connectée Zeta",
      image: "api\data\images\smartmo.jpg",
      description: "Montre connectée avec suivi des activités sportives et capteur de fréquence cardiaque.",
      rating: 4.3,
      price: 199,
      countInStock: 12,
      numReview: 18,
      reviews: [
        {
          name: "Sophie Leblanc",
          rating: 4,
          comment: "Très pratique pour le sport, mais l'interface pourrait être améliorée.",
          user: "643f1b5d7e7b6c2f77a4d237"
        }
      ]
    },
    {
      name: "Tablette UltraTab 10",
      image: "api\data\images\tablette.jpeg",
      description: "Tablette 10 pouces avec écran haute résolution et 128 Go de stockage.",
      rating: 4.6,
      price: 499,
      countInStock: 20,
      numReview: 12,
      reviews: [
        {
          name: "Paul Durand",
          rating: 5,
          comment: "Excellente tablette, rapide et l'écran est magnifique !",
          user: "643f1b5d7e7b6c2f77a4d238"
        }
      ]
    },
    {
      name: "Casque de réalité virtuelle VRX",
      image: "api\data\images\Fonction-casque-de-realite-virtuelle.jpg",
      description: "Casque VR avec un champ de vision de 110 degrés et support pour la réalité augmentée.",
      rating: 4.8,
      price: 299,
      countInStock: 5,
      numReview: 30,
      reviews: [
        {
          name: "Lucie Bernard",
          rating: 5,
          comment: "Immersion totale, l'expérience VR est vraiment bluffante.",
          user: "643f1b5d7e7b6c2f77a4d239"
        }
      ]
    }
  ];
  
  module.exports = products;