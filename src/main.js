import App from './App.svelte';

const app = new App({
  target: document.getElementById("main"),
  props: {
    services: [
      {
        name: "Toilet Paper", img: "toilet-paper.svg", services: [
          "Center Pull Toilet Paper Dispenser",
          "Center Pull Toilet Paper",
          "Coreless Dispensers",
          "Dual Roll Dispensers",
          "Jumbo Roll Dispensers",
          "Jumbo Roll Toilet Paper",
          "Pallet of Toilet Paper",
          "Standard Roll Dispenser",
          "Standard Toilet Paper",
          "Toilet Paper Dispensers",
          "Toilet Paper Holder",
          "Toilet Paper",
          "Toilet Seat Covers & Dispensers",
        ]
      },
      {
        name: "Paper Towels", img: "paper-towels.svg", services: [
          "C-Fold Paper Towels",
          "Center Pull Paper Towels",
          "Kitchen Paper Towels",
          "Multifold Paper Towels",
          "Pallet of Paper Towels",
          "Paper Hand Towels & Dispensers)",
          "Paper Towel Dispensers",
          "Roll Paper Towels",
          "Single Fold Towels",
        ]
      },
      {
        name: "Napkins", img: "napkin.svg", services: [
          "Beverage Napkins",
          "Dinner Napkins",
          "Facial Tissues",
          "Luncheon Napkins",
          "Napkins & Dispensers",
        ]
      },
      {
        name: "Wipes", img: "wipe.svg", services: [
          "All Purpose Wipes",
          "Automotive Wipes",
          "Baby Wipes",
          "Cleaning Cloth",
          "Disinfecting Wipes",
          "Dust Cloth",
          "Food Service Towels",
          "Personal Care Wipes",
          "Rags",
          "Specialty Wipes",
          "Utility Wipes",
        ]
      },
    ]
  }
});

export default app;