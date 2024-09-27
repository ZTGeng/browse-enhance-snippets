videoContainer = document.getElementById("main-container");
videoContainer.style.width = "50%";

scriptNewContainer = document.createElement("div");
scriptNewContainer.id = "new-script";
scriptNewContainer.style.height = "100vh"
scriptNewContainer.style.overflow = "scroll"

parentDiv = videoContainer.parentElement;
t = parentDiv.offsetTop;
parentDiv.style.position = "absolute"
parentDiv.style.top = t + "px";

scriptDiv = document.getElementsByClassName("cds-1 css-arowdh cds-3 cds-grid-item cds-48 cds-73")[0];
scriptContainer = scriptDiv.parentElement;

scriptContainer.removeChild(scriptDiv);
scriptNewContainer.appendChild(scriptDiv);

parentDiv.appendChild(scriptNewContainer);