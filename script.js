const budgetInput = document.getElementById('budget');
const destinationList = document.getElementById('destination-list');

const destinations = [
  { name: "Paris", cost: 1500 },
  { name: "New York", cost: 2000 },
  { name: "Dubai", cost: 1200 },
  { name: "Tokyo", cost: 1000 },
  { name: "Sydney", cost: 1800 }
];

budgetInput.addEventListener('input', function() {
  const budget = parseInt(budgetInput.value);
  const filteredDestinations = destinations.filter(destination => destination.cost <= budget);
  destinationList.innerHTML = filteredDestinations.map(destination => 
    `<li>${destination.name} - $${destination.cost}</li>`
  ).join('');
});
