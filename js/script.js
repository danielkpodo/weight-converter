let weightInput = document.querySelector("#weightInput");
document.getElementsByClassName("results")[0].style.display = "none";
weightInput.addEventListener("change", function(e) {
  let originalInput = e.target.value;
  document.getElementsByClassName("results")[0].style.display = "block";
  document.getElementById("kilo").textContent =
    toThreeFixed(originalInput / 1000) + " kg";
  document.getElementById("pounds").textContent =
    toThreeFixed(originalInput / 453.592) + " pounds";
  document.getElementById("ounce").textContent =
    toThreeFixed(originalInput / 28.35) + " ounce";
});

function toThreeFixed(num) {
  return num.toFixed(3);
}
