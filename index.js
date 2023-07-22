const timerSetBtn = document.getElementById("timerSetBtn");
const addTimerContainer = document.getElementById("addTimerContainer");
const timerscount=document.getElementById("timerscount");
let inputhours = document.getElementById("hours");
let inputminutes = document.getElementById("minutes");
let inputseconds = document.getElementById("seconds");


timerSetBtn.addEventListener('click', () => {
    // <div id="timer">
    //         <h3 id="timerName">Set Time :</h3>
    //         <input type="number" placeholder="hh" id="hours" min="0"><span id="spanCode">:</span>
    //         <input type="number" placeholder="mm" id="minutes" min="0" max="59"><span id="spanCode">:</span>
    //         <input type="number" placeholder="ss" id="seconds" min="0" max="59">

    //         <button id="timerDeleteBtn">Delete</button>
    //     </div>

    // timerscount.display="none";
    let div = document.createElement("div");
    div.id = "timer";

    let h3 = document.createElement("h3");
    h3.id = "timerName";
    h3.textContent = "Set Time :";

    let inputhr= document.createElement("input");
    inputhr.id = "hours";
    inputhr.value = inputhours.value;
    inputhr.type="number";
    inputhr.placeholder="hh";
    inputhr.min="0";
    let spanhr= document.createElement("span");
    spanhr.id = "spanCode";
    spanhr.textContent = ":";

    let inputmin = document.createElement("input");
    inputmin.id = "minutes";
    inputmin.value = inputminutes.value;
    inputmin.type="number";
    inputmin.placeholder="mm";
    inputmin.min="0";
    inputmin.max="59";
    let spanmin = document.createElement("span");
    spanmin.id = "spanCode";
    spanmin.textContent = ":";

    let inputsec = document.createElement("input");
    inputsec.id = "seconds";
    inputsec.value = inputseconds.value;
    inputsec.type="number";
    inputsec.placeholder="ss";
    inputsec.min="0";

    let button = document.createElement("button");
    button.id = "timerDeleteBtn";
    button.textContent = "Delete";

    div.appendChild(h3);
    div.appendChild(inputhr);
    div.appendChild(spanhr);
    div.appendChild(inputmin);
    div.appendChild(spanmin);
    div.appendChild(inputsec);
    div.appendChild(button);

    addTimerContainer.append(div);

    // clear all inputs fields
    inputhours=' ';
    inputminutes=' ';
    inputseconds=' ';
});