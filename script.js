document.addEventListener("DOMContentLoaded", () => {
  const locations = [
    { name: "Paris", cost: 2000, image: "assets/paris.jpg" },
    { name: "Bali", cost: 1500, image: "assets/bali.jpg" },
    { name: "Goa", cost: 500, image: "assets/goa.jpg" },
    { name: "Tokyo", cost: 3000, image: "assets/tokyo.jpg" },
    { name: "New York", cost: 2500, image: "assets/newyork.jpg" },
  ];

  const budget = prompt("Enter your budget:");

  const filteredLocations = locations.filter((location) => location.cost <= budget);

  const locationsDiv = document.querySelector("#locations");

  if (filteredLocations.length === 0) {
    locationsDiv.innerHTML = "<p>No locations available for your budget.</p>";
  } else {
    filteredLocations.forEach((loc) => {
      const card = document.createElement("div");
      card.classList.add("location-card");
      card.innerHTML = `
        <img src="${loc.image}" alt="${loc.name}" class="location-img">
        <h3>${loc.name}</h3>
        <p>Cost: $${loc.cost}</p>
      `;
      locationsDiv.appendChild(card);
    });
  }
});
