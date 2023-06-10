let container=document.querySelector(".container");
for (let i=0;i<=256;i++) {
    let newDiv=document.createElement("div");
    newDiv.className="cell";
    container.appendChild(newDiv);
}
