const plugin = ({ widgets, simulator, vehicle }) => {
    const container = document.createElement("div")
    container.setAttribute("style", `height: 100%; width: 100%;`)
    container.innerHTML = (`
    <div class="trip">
    <i class="fa-sharp fa-solid fa-location-dot"></i>
    <h6>Trip distance</h6>
    <h5 id="tripcount"></h5>
</div>
    `)


    // const speedCount = document.getElementById("speedcount")
    const tripCount = document.getElementById("tripcount")
    // const batteryCount = document.getElementById("batterycount")
    // const fuelCount = document.getElementById("fuelcount")



    setInterval(count, 3000);

    function count() {
        // speedCount.innerHTML = Math.floor((Math.random() * 100)) + "km/hr"
        tripCount.innerHTML = Math.floor((Math.random() * 100)) + "km/hr"
        // batteryCount.innerHTML = Math.floor((Math.random() * 100)) + "%"
        // fuelCount.innerHTML = Math.floor((Math.random() * 100)) + "%"
    }

    let boxGlobal = null

    widgets.register("TRIP", (box) => {
        boxGlobal = box
        box.injectNode(container)
        return () => {
            boxGlobal = null
            // Deactivation function for clearing intervals or such.
        }
    })

    return {
        set_text: (text) => {
            if (boxGlobal !== null) {
                container.querySelector(".smartphone-text").textContent = text
            }
        }
    }
}

export default plugin