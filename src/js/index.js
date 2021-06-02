import image from "../img/image01.png";
import showMessage from "./test";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  const img = document.createElement("img");

  element.innerHTML = "Hello webpack";

  // btn.innerHTML = "Click me and check the console!";
  // btn.onclick = printMe;

  img.src = image;
  img.alt = "";

  element.appendChild(btn);

  element.appendChild(img);

  showMessage("getting started");

  return element;
}

document.body.appendChild(component());
