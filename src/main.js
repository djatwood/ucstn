import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    services: [
      {
        name: "Personal Hygiene Products", color: "8675a9", services: [
          "Toothpaste",
          "Toothbrush Dental Floss",
          "Body Soaps/Hand Sanitizer",
          "Body Lotions",
          "Shaving Razors/Creams",
          "Deodorants",
          "Hair Care Products",
          "Feminine Hygiene Supplies",
          "Adult Wipes",
          "Mouthwash",
          "Brush/Combs",
          "Toilet Paper",
          "Shower Cap",
          "Diapers",
          "Epson Salts For Sore Muscles",
        ]
      },
      {
        name: "Personal Protective Equipment", color: "c3aed6", services: [
          "Face Mask",
          "Gowns",
          "Face Shields",
          "Goggles",
          "Gloves (Latex, Vinyl, Nitrile Exam Disposable)",
          "Protective Suits",
          "Shoe Cover",
          "Disinfectants",
          "Hair/Beard Nets",
        ]
      },
      {
        name: "Paper Products", color: "efbbcf", services: [
          "Paper Towels",
          "Toilet Paper",
          "Paper Bags/Plastic",
          "Shop Towels",
          "Facial Tissue ",
        ]
      },
      {
        name: "Non Perishable Goods", color: "ffd5cd", services: [
          "Canned Meats",
          "Canned Tuna and Salmon",
          "Peanut Butter",
          "Jelly (no glass)",
          "Canned or Dry Soups",
          "Canned Stews and Chili",
          "Tea Bags",
          "Coffee (ground no beans)",
          "Canned Pasta",
          "Canned Vegatables",
          "Canned Fruit",
          "Canned Pasta (Spaghetti “O’s”)",
          "Hot and Cold Cereals",
          "Rice",
          "Cake Mixes",
          "Pancake Mix",
          "Syrup",
          "Powdered Milk",
          "Packaged Pasta (Macaroni & Cheese, etc.)",
          "Juice Boxes",
          "Canned Juices",
          "Canned Beans",
          "Spam",
          "Canned Gravy",
          "Granulated Sugar",
          "Baby Food & Cereal (glass jars accepted)",
          "Baby Formula (Enfamil/Similac)",
          "Granola Bars",
          "Cereal Bars",
        ]
      },
    ]
  }
});

export default app;