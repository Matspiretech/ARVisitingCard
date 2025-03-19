const phoneNumber = "+9999999999";

const modelErrorMessage = document.getElementById("error-message");
const emptyMarkerErrorMessage = document.getElementById("empty-marker-error");
const dialerButton = document.querySelector(".dialer-button");

document.addEventListener("DOMContentLoaded", () => {
    // Get all NFT markers
    const nftMarkers = document.querySelectorAll(".ar-marker");

    nftMarkers.forEach((marker) => {
        marker.addEventListener("markerFound", () => {
            // Show the call button when the marker is found
            dialerButton.style.display = "block";

            //Checks whether the marker has a model
            const hasModel = marker.querySelector("a-entity");
            if (!hasModel) {
                emptyMarkerErrorMessage.style.display = "block";
                dialerButton.style.display = "none";
            }
        });

        // Hide the errors and buttons when marker is lost
        marker.addEventListener("markerLost", () => {
            dialerButton.style.display = "none";
            modelErrorMessage.style.display = "none";
            emptyMarkerErrorMessage.style.display = "none";
        });

        // Check if models inside the marker fail to load
        const models = marker.querySelectorAll("a-entity[gltf-model]");
        models.forEach((model) => {
            model.addEventListener("model-error", () => {
                modelErrorMessage.style.display = "block";
                dialerButton.style.display = "none";
            });
        });
    });
});

// Open the dialer when the button is clicked
dialerButton.addEventListener("click", ()=>{
    window.location.href = `tel:${phoneNumber}`;
});