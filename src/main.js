import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    services: [
      {
        name: "Toilet Paper", color: "8675a9", img: "toilet-paper.png", services: [
          "Toilet Paper",
          "Standard Toilet Paper",
          "Jumbo Roll Toilet Paper",
          "Center Pull Toilet Paper",
          "Pallet of Toilet Paper",
          "Toilet Paper Holder",
          "Toilet Paper Dispensers",
          "Standard Roll Dispenser",
          "Jumbo Roll Dispensers",
          "Dual Roll Dispensers",
          "Coreless Dispensers",
          "Center Pull Toilet Paper Dispenser",
          "Toilet Seat Covers & Dispensers",
        ]
      },
      {
        name: "Paper Towels", color: "c3aed6", img: "paper-towels.png", services: [
          "Paper Hand Towels & Dispensers)",
          "C-Fold Paper Towels",
          "Multifold Paper Towels",
          "Single Fold Towels",
          "Center Pull Paper Towels",
          "Roll Paper Towels",
          "Kitchen Paper Towels",
          "Paper Towel Dispensers",
          "Pallet of Paper Towels",
        ]
      },
      {
        name: "Napkins", color: "efbbcf", img: "napkin.png", services: [
          "Napkins & Dispensers",
          "Beverage Napkins",
          "Dinner Napkins",
          "Luncheon Napkins",
          "Facial Tissues",
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