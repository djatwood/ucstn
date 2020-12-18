import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    services: [
      {
        name: "Personal Hygiene Products", services: [

        ]
      },
      {
        name: "Personal Protective Equipment", services: [

        ]
      },
      {
        name: "Paper Products", services: [

        ]
      },
      {
        name: "Non Perishable Goods", services: [

        ]
      },
    ]
  }
});

export default app;