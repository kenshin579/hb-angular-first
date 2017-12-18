import {areaOfCircle, areaOOfRectangle} from "./area-util";

document.addEventListener('DOMContentLoaded', function () {
    registerBVtnCbAtfterDomReady();
}, false);

const circleAreaCb = function () {
    const radius = document.getElementById("circle-radius").value;
    document.getElementById("circle-area").value = areaOfCircle(radius);
};

const rectangleAreaCb = function () {
    const w = document.getElementById("rectangle-width").value;
    const h = document.getElementById("rectangle-height").value;
    document.getElementById("rectangle-area").value = areaOOfRectangle(w, h);
};

const registerBVtnCbAtfterDomReady = function () {
    document.getElementById("circle-button").addEventListener('click', circleAreaCb);
    document.getElementById("rectangle-button").addEventListener('click', rectangleAreaCb);
};

