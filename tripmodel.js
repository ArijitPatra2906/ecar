const plugin = ({ widgets, simulator, vehicle }) => {
    const trip = document.createElement("div")
    const tripCount = document.createElement("h5")
    tripCount.innerHTML = setInterval(Math.floor((Math.random() * 100)) + "km/hr", 3000)
    trip.setAttribute("style", `height: 100%; width: 100%;`)
    trip.innerHTML = (`
    <div class="tripBox" style="max-width: fit-content; margin: 0 auto; position: relative;>
    <i class="fa-sharp fa-solid fa-location-dot"></i>
    <h3>Trip distance</h3>
    <h5 style="text-align:center" class="tripcount"></h5>
</div>
    `)

    let boxGlobal = null

    widgets.register("TRIP", (box) => {
        boxGlobal = box
        box.injectNode(trip)
        box.injectNode(tripCount)
        return () => {
            boxGlobal = null
            // Deactivation function for clearing intervals or such.
        }
    })
    return {
        set_text: (text) => {
            if (boxGlobal !== null) {
                trip.querySelector(".tripcount").textContent = text
            }
        }
    }
}

export default plugin