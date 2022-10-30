const speedCount = document.getElementById("speedcount")
const tripCount = document.getElementById("tripcount")
const batteryCount = document.getElementById("batterycount")
const fuelCount = document.getElementById("fuelcount")



setInterval(count, 3000);

function count() {
    speedCount.innerHTML = Math.floor((Math.random() * 100)) + "km/hr"
    tripCount.innerHTML = Math.floor((Math.random() * 100)) + "km/hr"
    batteryCount.innerHTML = Math.floor((Math.random() * 100)) + "%"
    fuelCount.innerHTML = Math.floor((Math.random() * 100)) + "%"
}