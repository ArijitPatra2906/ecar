const plugin = ({ widgets, simulator, vehicle }) => {
    const trip = document.createElement("div")
    trip.setAttribute("style", `height: 100%; width: 100%;`)
    trip.innerHTML = (`
    <div id="tripBox" style="max-width: fit-content; margin: 0 auto; position: relative;>
    <i class="fa-sharp fa-solid fa-location-dot"></i>
    <h3>Trip distance</h3>
    <h5 id="tripcount">143KM</h5>
</div>
    `)


    const tripCount = document.getElementById("tripcount")



    setInterval(count, 3000);

    function count() {
        tripCount.innerHTML = Math.floor((Math.random() * 100)) + "km/hr"
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
                trip.querySelector("#tripcount").textContent = text
            }
        }
    }
}

export default plugin

