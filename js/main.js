const fullName = prompt("What is your full name?");

const nameTag = document.getElementById("name");

console.log(nameTag.innerText);

if (fullName) {
    nameTag.innerText = fullName + ',';
}

const tripDistance = document.querySelector("#trip-distance");
const tripEfficiency = document.querySelector("#trip-efficiency");
const fuelCostEl = document.querySelector("#fuel-cost");
const calculateBtnEl = document.querySelector("#calculateBtn");

// console.log(tripDistance);

// console.log(calculateBtnEl);

calculateBtnEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (tripDistance.value === "") {
    alert("Enter your trip distance");
  } else {
    const distanceKm = tripDistance.value;
    const tripEffi = tripEfficiency.value;
    const fuelCost = fuelCostEl.value;

    const result = (distanceKm / tripEffi) * fuelCost;
    // console.log(result);

    const finalResult = "Your fuel cost is around: ₹" + result;

    alert(finalResult);
  }
});
