videoContainer = document.getElementById("main-container");
videoContainer.style.width = "50%";

parentDiv = videoContainer.parentElement;
t = parentDiv.offsetTop;
h = parentDiv.offsetHeight;
parentDiv.style.position = "absolute";
parentDiv.style.top = t + "px";
parentDiv.style.height = h + "px";

scriptNewContainer = document.createElement("div");
scriptNewContainer.id = "new-script";
scriptNewContainer.style.height = h + "px";
scriptNewContainer.style.overflow = "scroll";

scriptDiv = document.getElementsByClassName("cds-1 css-arowdh cds-3 cds-grid-item cds-48 cds-73")[0];
scriptContainer = scriptDiv.parentElement;

scriptContainer.removeChild(scriptDiv);
scriptNewContainer.appendChild(scriptDiv);

parentDiv.appendChild(scriptNewContainer);