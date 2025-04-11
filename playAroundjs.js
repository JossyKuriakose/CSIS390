document.querySelector("#press").addEventListener("click", function(){
    let parentElement = document.querySelector("body");
    let addOn = document.querySelector("#name");
    let addVal = addOn.value;
    let childElement = document.createElement("p");
    childElement.innerHTML = "Nice to meet you " + addVal;
    parentElement.appendChild(childElement);
});

document.querySelector("xs").addEventListener("click", function(){
    document.querySelector("p").style.fontSize = "32px";
});
