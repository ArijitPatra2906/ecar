const plugin = ({ widgets, simulator, vehicle }) => {
    const trip = document.getElementById("div")
    trip.setAttribute("style", `height: 100%; width: 100%;`)
    trip.innerHTML = (`
    <div id="trip" style="max-width: fit-content; margin: 0 auto; position: relative;>
    <i class="fa-sharp fa-solid fa-location-dot"></i>
    <h6>Trip distance</h6>
    <h5 id="tripcount"></h5>
</div>
    `)


    const tripCount = document.getElementById("tripcount")



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
        box.injectNode(trip)
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