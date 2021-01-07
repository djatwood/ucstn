import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    services: [
      {
        name: "Toilet Paper", color: "8675a9", img: "toilet-paper.png", services: [
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
        name: "Paper Towels", color: "c3aed6", img: "paper-towels.png", services: [
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
        name: "Napkins", color: "efbbcf", img: "napkin.png", services: [
          "Beverage Napkins",
          "Dinner Napkins",
          "Facial Tissues",
          "Luncheon Napkins",
          "Napkins & Dispensers",
        ]
      },
      {
        name: "Wipes", color: "ffd5cd", img: "wipe.png", services: [
          "All Purpose Wipes",
          "Automotive Wipers",
          "Baby Wipes",
          "Cleaning Cloth",
          "Disinfecting Wipes",
          "Dust Cloth",
          "Food Service Towels",
          "Personal Care Wipes",
          "Rags",
          "Specialty Wipes",
          "Utility Wipers",
        ]
      },
    ]
  }
});

export default app;